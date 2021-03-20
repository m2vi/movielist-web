import config from '../config/config';

export default (str: string) => {
  const vars = config.variables;

  var i: number;
  for (i = 0; i <= vars.length; i++) {
    str.replace(`%${vars[i].value}%`, vars[i].replace);
  }
};
