const validationEmail = (value) => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(value);
};

const validationPsw = (value) => {
  const pattern = /^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{6,64}))/g;
  return pattern.test(value);
};
const trimValue = (value) => {
  return value.trim();
};

export {
  validationEmail,
  validationPsw,
  trimValue,
}