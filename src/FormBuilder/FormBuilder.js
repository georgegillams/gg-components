import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, TextArea } from '../Input';
import { Checkbox } from '../Checkbox';
import { cssModules } from '../helpers/cssModules';

import STYLES from './forms.scss';

import { Button } from '../Button';
import { TextLink } from '../Typography';
import { formValueChanged } from '../helpers/objects';
import HelperFunctions from '../helpers/HelperFunctions';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

class FormBuilder extends React.Component {
  static propTypes = {
    entity: PropTypes.object.isRequired,
    onDataChanged: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitLabel: PropTypes.string.isRequired,
    presubmitText: PropTypes.string,
    formFields: PropTypes.arrayOf(PropTypes.object).isRequired,
    submitOnChange: PropTypes.bool,
    disabled: PropTypes.bool,
    centered: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    submitOnChange: false,
    disabled: false,
    centered: false,
    presubmitText: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      formId: Math.random()
        .toString(36)
        .substring(7),
    };
  }

  render() {
    const {
      className,
      centered,
      disabled,
      entity,
      onDataChanged,
      submitOnChange,
      onSubmit,
      presubmitText,
      submitLabel,
      formFields,
      ...rest
    } = this.props;

    const classNameFinal = [];
    if (className) classNameFinal.push(className);

    const validity = [];
    for (let i = 0; i < formFields.length; i += 1) {
      const field = formFields[i];
      const fieldId = field.id;
      const fieldName = field.name;
      const fieldRegex = field.validationRegex;
      validity[i] =
        !(entity[fieldId] && entity[fieldId].match) ||
        (!!entity[fieldId] && !!entity[fieldId].match(fieldRegex));
    }

    const filteredFormFields = formFields.filter(
      field =>
        HelperFunctions.includes(Object.keys(field), 'show') && field.show,
    );

    return (
      <div className={classNameFinal.join(' ')} {...rest}>
        {filteredFormFields.map((formField, index) => (
          <Fragment>
            {formField.type === 'CHECKBOX' && (
              <Fragment>
                <Checkbox
                  className={getClassName('forms__component')}
                  name={formField.name}
                  label={formField.name}
                  checked={entity[formField.id]}
                  onChange={event => {
                    formValueChanged(
                      entity,
                      formField.id,
                      event,
                      onDataChanged,
                      submitOnChange ? onSubmit : null,
                    );
                  }}
                  enabled={formField.disabled !== null && !formField.disabled}
                />
                <br />
              </Fragment>
            )}
            {!formField.long && formField.type !== 'CHECKBOX' && (
              <Fragment>
                <label
                  htmlFor={`${formField.id}_${this.state.formId}`}
                  className={getClassName(
                    'forms__component',
                    'forms__component__label',
                  )}
                >
                  {formField.name}
                </label>
                <Input
                  className={getClassName(
                    'forms__component',
                    'forms__component__text-box',
                  )}
                  id={`${formField.id}_${this.state.formId}`}
                  name={formField.name}
                  value={entity[formField.id]}
                  valid={validity[index]}
                  type={formField.type === 'password' ? 'password' : null}
                  onChange={event => {
                    formValueChanged(
                      entity,
                      formField.id,
                      event,
                      onDataChanged,
                      submitOnChange ? onSubmit : null,
                    );
                  }}
                  disabled={formField.disabled}
                  placeholder={formField.name}
                />
              </Fragment>
            )}
            {formField.long && formField.type !== 'CHECKBOX' && (
              <Fragment>
                <label
                  htmlFor={`${formField.id}_${this.state.formId}`}
                  className={getClassName(
                    'forms__component',
                    'forms__component__label',
                  )}
                >
                  {formField.name}
                </label>
                <TextArea
                  className={getClassName(
                    'forms__component',
                    'forms__component__text-box',
                  )}
                  id={`${formField.id}_${this.state.formId}`}
                  name={formField.name}
                  value={entity[formField.id]}
                  valid={validity[index]}
                  onChange={event => {
                    formValueChanged(
                      entity,
                      formField.id,
                      event,
                      onDataChanged,
                      submitOnChange ? onSubmit : null,
                    );
                  }}
                  disabled={formField.disabled}
                  placeholder={formField.name}
                />
              </Fragment>
            )}
          </Fragment>
        ))}
        {presubmitText && (
          <Fragment>
            <div className={getClassName('forms__component')}>
              {presubmitText}
            </div>
          </Fragment>
        )}
        {!submitOnChange && (
          <Button
            className={getClassName(
              'forms__component',
              'forms__component__button',
            )}
            large
            onClick={onSubmit}
            disabled={disabled || !validity.every(v => v)}
          >
            {submitLabel}
          </Button>
        )}
      </div>
    );
  }
}

export default FormBuilder;
