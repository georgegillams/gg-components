const formValueChanged = (
  object,
  attributeName,
  event,
  action,
  callback = null,
) => {
  const newValue = JSON.parse(JSON.stringify(object));
  newValue[attributeName] =
    event.target.value === 'on' ? event.target.checked : event.target.value;
  if (action) {
    action(newValue);
  }
  if (callback) {
    callback(newValue);
  }
};

const createDictionary = (data, keyProperty) => {
  const dict = {};
  for (let i = 0; i < data.length; i += 1) {
    const key = data[i][keyProperty];
    if (dict[key]) {
      dict[key].push(data[i]);
    } else {
      dict[key] = [data[i]];
    }
  }
  return dict;
};

const deArrayitise = array => {
  if (array && array.length === 1) {
    return array[0];
  }
  return array;
};

const associate = (
  data,
  additionalData,
  dataKey,
  additionalDataKey,
  associationName,
  preventDearrayisation,
) => {
  const newData = JSON.parse(JSON.stringify(data));

  // Create a dictionary of the additional data
  const additionalDataDictionary = createDictionary(
    additionalData,
    additionalDataKey,
  );

  for (let i = 0; i < newData.length; i += 1) {
    const key = newData[i][dataKey];
    if (additionalDataDictionary[key]) {
      const finalValue = preventDearrayisation
        ? additionalDataDictionary[key]
        : deArrayitise(additionalDataDictionary[key]);
      newData[i][associationName] = finalValue;
    }
  }
  return newData;
};

export { formValueChanged, associate };
export default {
  formValueChanged,
  associate,
};
