import * as React from 'react';
import axios from 'axios';

//Components
import Input from './input';
import InputButton from './button';

//Functions
import {validate, passwordComparison} from '../../functions/validate';

//Styled-Components
import {
    ContainerClouse,
    FormSC
} from './styled';



function Singup(props: any) {
    const {modalLogin, setModalLogin} = props;

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const [errorName, setErrorName] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState("");
    const [errorPhone, setErrorPhone] = React.useState("");
    const [errorCompany, setErrorCompany] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState("");
    const [errorRePassword, setErrorRePassword] = React.useState("");
    function handleName(e: any) {setName(e.target.value)};
    function handleEmail(e: any) {setEmail(e.target.value)};
    function handlePhone(e: any) {setPhone(e.target.value)};
    function handleCompany(e: any) {setCompany(e.target.value)};
    function handlePassword(e: any) {setPassword(e.target.value)};
    function handleRePassword(e: any) { setRePassword(e.target.value)};
    function handleSubmit(e: any) {
        e.preventDefault();
        if(
            validate(name,"text",true).valid &&
            validate(email,"email",true).valid &&
            validate(phone,"number", true).valid &&
            validate(company,"text",true).valid &&
            validate(password,"password", true).valid &&
            passwordComparison(password, rePassword).valid
        ) {
            console.log("aplicar axios");
            setErrorName("");
            setErrorEmail("");
            setErrorPhone("");
            setErrorCompany("");
            setErrorPassword("");
            setErrorRePassword("");
            axios.post('/api/register_user',
            {
                "name": name,
                "email": email,
                "phone": phone,
                "company": company,
                "password": password
            })
            .then(({data}) => {
                console.log(data)
                setModalLogin({
                    modal: true,
                    login: false,
                    singup: false,
                    forgot: false,
                    emailok: true
                })
            })
            .catch((error) => {console.log("este es un error",error)});
        } else {
            setErrorName(validate(name,"text",true).error);
            setErrorEmail(validate(email,"email",true).error);
            setErrorPhone(validate(phone,"number",true).error);
            setErrorCompany(validate(company,"text",true).error);
            setErrorPassword(validate(password,"password",true).error);
            setErrorRePassword(passwordComparison(password,rePassword).error);
            console.log("ocurrió un error, no aplicar axios");
        }
    }

    return(
        <FormSC onSubmit={handleSubmit} modalLogin={modalLogin.singup}>
            <ContainerClouse>
                <h1 onClick={()=> setModalLogin(false)}>X</h1>
            </ContainerClouse>
            <h2>Good to see<br/> you again</h2>
            <Input labeltext="Name" onChange={handleName} error={errorName}/>
            <Input labeltext="Email" onChange={handleEmail} error={errorEmail}/>
            <Input labeltext="Password" onChange={handlePassword} error={errorPassword}/>
            <Input labeltext="re-Password" onChange={handleRePassword} error={errorRePassword}/>
            <Input labeltext="Phone" onChange={handlePhone} error={errorPhone}/>
            <Input labeltext="Company" onChange={handleCompany} error={errorCompany}/>
            <InputButton />
        </FormSC>
    );
}

export default Singup;