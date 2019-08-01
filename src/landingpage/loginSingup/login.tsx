import * as React from 'react';
import axios from 'axios';

//Components
import Input from './input';
import InputButton from './button';

import {
    ContainerClouse,
    FormSC
} from './styled';

//functions 
import {validate} from '../../functions/validate';






function Login(props: any) {
    const {setIsLogin,modalLogin, setModalLogin} = props; 

    const [email, setEmail] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState("");
    function handleEmail(e: any) {setEmail(e.target.value)};
    function handlePassword(e: any) {setPassword(e.target.value)};

    function handleSubmit(e: any) {
        e.preventDefault();
        
        if(validate(email,"email", true).valid && validate(password, "password", true).valid) {
            setErrorEmail("")
            setErrorPassword("");
            axios.post('/api/login_user',
            {
                "email": email,
                "password": password
            })
            .then(({data}) => {
                console.log(data);
                localStorage.setItem('token', data.token);
                setIsLogin(true);
                setModalLogin(false);
            })
            .catch((error) => {console.log("este es un error",error)});
        } else {
            setErrorEmail(validate(email, "email", true).error)
            setErrorPassword(validate(password, "password", true).error);
            console.log("todo mal")
        }


        
    }
    function handleForgot() {
        setModalLogin({
            modal: true,
            login: false,
            singup: false,
            forgot: true,
            emailok: false
        });
    }
    return(
        <FormSC onSubmit={handleSubmit} modalLogin={modalLogin.login}>
                <ContainerClouse>
                    <h1 onClick={() => setModalLogin(false)}>X</h1>
                </ContainerClouse>
                <h2>Good to see<br/> you again</h2>
                <Input labeltext="Email" onChange={handleEmail} error={errorEmail}/>
                <Input labeltext="Password" onChange={handlePassword} error={errorPassword}/>
                <InputButton />
                <a href="#" onClick={handleForgot}>Forgot password?</a>
        </FormSC>
    );
}

export default Login;