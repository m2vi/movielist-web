const key = (str: string) => {
  // str = str.replace(/[-]+/g, '~');
  // str = str.replace(/[ ]+/g, '-');
  str = str.toLowerCase();

  return {
    str,
  };
};

export default key;
