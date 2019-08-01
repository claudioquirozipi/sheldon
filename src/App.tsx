import * as React from 'react';

import LandingPage from './landingpage';
import LoginSingup from './landingpage/loginSingup';
import MyApp from './app/index';

import { createGlobalStyle } from 'styled-components';
import axios from 'axios';




const GlobalStyle = createGlobalStyle`
  * {font-family: 'Montserrat', sans-serif;}
  body {
    margin: 0;
    padding: 0;
  }
`;


function App() {
  const isLoginInitial: boolean= localStorage.getItem("token")?true:false;
  const [isLogin, setIsLogin] = React.useState(isLoginInitial);
  const [modalLogin, setModalLogin] = React.useState({
    modal: false,
    login: false,
    singup: false,
    forgot: false,
    emailok: false
  });
  React.useEffect(() => {
    console.log("Este es el token: ",localStorage.getItem("token"));
  },[isLogin]);
  
  function ViewAppLanding() {
    var autorization = false;
    axios.post('/api/authorization', {"token": isLogin})
      .then(({data}) => {
        console.log(data);
        autorization = true;
      })
      .catch((error) => {
        console.log("este es un error",error);
        autorization = false;
      });
    if(isLogin && autorization) {return(<MyApp setIsLogin={setIsLogin}/>)}
    return(<>
      <LandingPage  setModalLogin={setModalLogin}/>
      <LoginSingup setIsLogin={setIsLogin} modalLogin={modalLogin} setModalLogin={setModalLogin}/>
    </>)
  }

  return (
    <div className="App">
      <GlobalStyle/>
      <ViewAppLanding />
    </div>
  );
}

export default App;
