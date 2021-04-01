import React, { useState } from 'react';

const SearchContext = React.createContext(void 0);

export const QueryProvider = ({ children, query }) => {
  const [currentQuery, setCurrentQuery] = useState(query);

  const saveQuery = (values) => {
    setCurrentQuery(values);
  };

  return (
    <SearchContext.Provider value={{ query: currentQuery, saveQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const QueryConsumer = SearchContext.Consumer;

export default SearchContext;
