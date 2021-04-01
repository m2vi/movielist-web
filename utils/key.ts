const key = (str: string) => {
  const title = str;
  str = str.replace(/[-]+/g, '_');
  str = str.replace(/[ ]+/g, '-');
  str = str.toLowerCase();

  let keywords_temp = title
    .toLocaleLowerCase()
    .replace(/[:]+/g, '')
    .replace(/[-]+/g, '')
    .split(' ');
  let keywords = [];
  for (let i = 0; i < keywords_temp.length; i++) {
    const keyword = keywords_temp[i];
    if (keyword.length <= 1) {
      continue;
    }

    keywords.push(keyword);
  }
  return {
    key: str,
    title,
    keywords,
  };
};

export default key;
