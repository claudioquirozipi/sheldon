import * as React from 'react';

import Header from './header';

function LandingPage(props: any) {
    const {setModalLogin} = props;
    return(
        <>
            <Header setModalLogin={setModalLogin}/>
        </>
    );
}

export default LandingPage;