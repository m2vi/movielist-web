import { stringify } from 'node:querystring';
import path from 'path';
import example from '../../templates/all.json';

const search = async (
  searchString: string,
  domain?: string,
  pathToJSON?: string
) => {
  if (searchString.length === 0 || typeof searchString != 'string') {
    return null;
  }

  searchString = searchString.toLowerCase().replace(/[  ]+/g, '');

  const filteredItems = example.children.filter((character) => {
    return (
      character.title.toLowerCase().includes(searchString) ||
      character.keywords.includes(searchString)
    );
  });

  console.log(filteredItems);
};

export default search;
