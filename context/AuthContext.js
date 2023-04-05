import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
   token: localStorage.getItem('token') || '',
   username: localStorage.getItem('username') || 'Anonymous',
  });

  const setUserAuthInfo = ({ token, username }) => {
   setAuthState({
    token,
    username,
   });
 };

 const clearUserAuthInfo = () => {
  setAuthState({
    token: '',
    username: 'Anonymous',
  })
 }

 // checks if the user is authenticated or not
 const isUserAuthenticated = () => !!authState.token;

 return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      clearAuthState: () => clearUserAuthInfo(),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };