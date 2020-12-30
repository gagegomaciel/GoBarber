import React from 'react';

import GlobalStyle from './styles/global';

// import SignIn from './pages/SignIn';
import Signup from './pages/SignUp';

const App: React.FC = () => (
  <>
    <Signup />
    <GlobalStyle />
  </>
);

export default App;
