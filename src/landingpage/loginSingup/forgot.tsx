import * as React from 'react';
import axios from 'axios';

//Componenst
import Input from './input';
import InputButton from './button';

//Functions
import {validate} from '../../functions/validate';
//Styled-Components
import {
    FormSC,
    ContainerClouse
} from './styled';


function Forgot(props: any) {
    const {modalLogin, setModalLogin} = props;
    const [email, setEmail] = React.useState("");
    const [errorEmail, setErroremail] = React.useState("");
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handleSubmit(e: any) {
        e.preventDefault();
        if (validate(email, "email", true).valid) {
            
            console.log("todo bien, aplicar axios, value email", email);
            setErroremail("");

            axios.post('/api/recover_password',{"email": email,})
            .then(({data}) => {
                console.log(data);
                setModalLogin(false);
            })
            .catch((error) => {console.log("este es un error",error)});
            
        } else {
            setErroremail(validate(email,"email",true).error);
        }
    }
    return(
        <FormSC onSubmit={handleSubmit} modalLogin={modalLogin.forgot}>
            <ContainerClouse>
                <h1 onClick={() => setModalLogin(false)}>X</h1>
            </ContainerClouse>
            <h2>Send a URL to<br/> you email</h2>
            <Input labeltext="email" onChange={handleEmail} error={errorEmail}/>
            <InputButton />
        </FormSC>
    );
}

export default Forgot;