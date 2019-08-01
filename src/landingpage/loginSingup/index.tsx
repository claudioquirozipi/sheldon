import * as React from 'react';



import Login from './login';
import Singup from './singup';
import Forgot from './forgot';
import EmailOk from './emailok';

import {
    ContainerBg
} from './styled';


function LoginSingup(props: any) {
    const {setIsLogin, modalLogin, setModalLogin} = props;



    return(
        <ContainerBg modalLogin={modalLogin.modal}>
            <Login setIsLogin={setIsLogin} modalLogin={modalLogin} setModalLogin={setModalLogin} />
            <Singup modalLogin={modalLogin} setModalLogin={setModalLogin}/>
            <Forgot modalLogin={modalLogin} setModalLogin={setModalLogin}/>
            <EmailOk modalLogin={modalLogin} setModalLogin={setModalLogin}/>
        </ContainerBg>
    );
}

export default LoginSingup;