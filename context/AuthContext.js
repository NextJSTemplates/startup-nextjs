import React from "react";

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
   token: localStorage.getItem('token') || '',
   username: localStorage.getItem('username') || 'Anonymous',
  });

  const setUserAuthInfo = ({ token, username }) => {
   localStorage.setItem('token', token);
   localStorage.setItem('username', username);

   setAuthState({
    token,
    username,
   });
 };

 // checks if the user is authenticated or not
 const isUserAuthenticated = () => !!authState.token;

 return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };