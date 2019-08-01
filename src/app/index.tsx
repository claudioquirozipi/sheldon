import * as React from 'react';

function HandleLogout(setIsLogin: any) {
    alert("logout")
    localStorage.removeItem('token');
    setIsLogin(false);
}

function MyApp(props: any) {
    const {setIsLogin} = props;

    return(
        <>
            <h1>My app</h1>
            <button onClick={(() => HandleLogout(setIsLogin))}>loguot</button>
        </>
    );
}

export default MyApp ;  