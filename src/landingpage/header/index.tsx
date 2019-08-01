import * as React from 'react';

import {
    HeaderSC,
    Nav,
    TitleContainer,
    ChatContainer
} from './styled';




function Header(props: any) {
    const {setModalLogin} = props;
    function handleModal(typeView: string) {
        console.log("hola");
        if (typeView == "login") {
            setModalLogin({
                modal: true,
                login: true,
                singup: false,
                forgot: false,
                emailok: false
            });
        } if (typeView == "sing Up") {
            setModalLogin({
                modal: true,
                login: false,
                singup: true,
                forgot: false,
                emailok: false
            });
        } else {
            
        }
    }
    return(
        <HeaderSC>
            <Nav>
                <h1>logo</h1>
                <div>
                    <h2 onClick={() => handleModal("login")}>Login</h2>
                    <h2 onClick={() => handleModal("sing Up")}>Sing Up</h2>
                </div>
            </Nav>
            <TitleContainer>
                <h1>The power of<br/> Media viralization<br/> in your hand.</h1>
                <button>Try</button>
            </TitleContainer>
            <ChatContainer><div></div></ChatContainer>
        </HeaderSC>
    );
}
export default Header;