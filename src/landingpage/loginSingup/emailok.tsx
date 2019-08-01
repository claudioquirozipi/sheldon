import * as React from 'react';


import {
    FormSC,
    ContainerClouse
} from './styled';

function EmailOk(props) {
    const {modalLogin, setModalLogin} = props;
    return(
        <FormSC modalLogin={modalLogin.emailok}>
                <ContainerClouse>
                    <h1 onClick={() => setModalLogin(false)}>X</h1>
                </ContainerClouse>
                <h2>Good to see<br/> you again</h2>
        </FormSC>
    );
}

export default EmailOk;