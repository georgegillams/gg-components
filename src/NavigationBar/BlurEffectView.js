import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cssModules } from '../helpers/cssModules';
import STYLES from './blur-effect.scss';

const getClassName = cssModules(STYLES);

class BlurEffectView extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.mainScrollElement;
    this.mainScrollElementClone;
  }

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  adjustCloneScroll = () => {
    if (!this.mainScrollElement || !this.mainScrollElementClone) {
      return;
    }
    const yValue = this.mainScrollElement.offsetTop - window.pageYOffset;
    this.mainScrollElementClone.style.transform = `translatey(${yValue}px)`;
  };

  recreateBlurClone = () => {
    if (!this.mainScrollElement || !this.myRef || !this.myRef.current) {
      return;
    }

    const newMainScrollElementClone = this.mainScrollElement.cloneNode(true);
    newMainScrollElementClone.style.filter = 'blur(10px)';
    newMainScrollElementClone.style.opacity = '0.5';
    newMainScrollElementClone.id += '_clone';
    if (this.mainScrollElementClone) {
      this.myRef.current.removeChild(this.mainScrollElementClone);
    }
    this.mainScrollElementClone = newMainScrollElementClone;
    this.myRef.current.append(this.mainScrollElementClone);
    this.adjustCloneScroll();
  };

  componentDidMount() {
    this.mainScrollElement = document.getElementById('mainScrollView');
    this.recreateBlurClone();
    this.interval = setInterval(this.recreateBlurClone, 2000);
    window.addEventListener('scroll', e => {
      this.adjustCloneScroll();
    });
  }

  render() {
    const { className, ...rest } = this.props;

    return (
      <div
        ref={this.myRef}
        aria-hidden="true"
        className={getClassName('blur-effect__outer', className)}
      />
    );
  }
}

export default BlurEffectView;
