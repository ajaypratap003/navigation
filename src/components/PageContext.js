import React from 'react';

const PageContext = React.createContext({
  apiName: null,
  isAuthenticated: false
});

export default PageContext;