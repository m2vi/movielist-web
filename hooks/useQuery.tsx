import { useContext } from 'react';
import SearchContext from '../context/QueryContext';

const context = () => {
  const context = useContext(SearchContext);
  return context;
};

export default context;
