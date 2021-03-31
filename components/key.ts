const key = (str: string) => {
  str = str.replace(/[-]+/g, '_');
  str = str.replace(/[ ]+/g, '-');
  str = str.toLowerCase();

  return {
    output: str,
  };
};

export default key;
