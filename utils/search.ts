import path from 'path';

const search = async (
  searchString: string,
  domain: string,
  pathToJSON: string
) => {
  const res = await fetch(path.join(domain, pathToJSON));
  const all = await res.json();

  let matches = all.filter((match) => {
    const regex = new RegExp(`^${searchString}`, 'gi');
    return match.name.match(regex) || match.abbr.match(regex);
  });

  if (searchString.length === 0) {
    matches = [];
  }

  console.log(matches);
};

// https://youtu.be/1iysNUrI3lw
