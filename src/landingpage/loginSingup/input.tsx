import * as React from 'react';

import {
    ContainerInput,
    InputSC,
    ImgSC,
    ContainerLabelInput,
    ErrorMessage
} from './styled';



function Input(props: any) {
    const {name, onChange, labeltext, error} = props
    return(
        <ContainerInput >
            <InputSC>
                <ImgSC/>
                <ContainerLabelInput>
                    <input type="text" name={name} onChange={onChange} placeholder={labeltext}/>
                    {/* <label>{labeltext}</label> */}
                </ContainerLabelInput>
                <ImgSC/>
            </InputSC>
            <ErrorMessage>{error}</ErrorMessage>
        </ContainerInput>
    );
}
export default Input;