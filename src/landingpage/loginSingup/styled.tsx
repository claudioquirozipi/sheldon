import styled from 'styled-components';
import {MQ} from '../../config/const';

//*************Index***************
export const ContainerBg = styled.div`
    background: #F8F8F8;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: ${(props: any) => props.modalLogin ? "0%" : "-100%"};
    left: 0;
    transition: top .5s;
`;
//**************Form***************
export const FormSC = styled.form`
    background: white;
    width: 90%;
    height: auto;
    display: ${(props) => props.modalLogin ? "flex" : "none"};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 12px;
    padding-bottom: 20px;
    @media ${MQ.md} {
        width: 500px;
        padding-bottom: 40px;
    }
    @media ${MQ.lg} {
        width: 650px;
        padding-bottom: 60px;
    }
    h2 {
        color: #70A1FF;
        text-align: center;
        margin-top: 36px;
        margin-bottom: 37px;
        @media ${MQ.md} {
            font-size: 25px;
        }
        @media ${MQ.lg} {
            font-size: 35px;
        }
    }
    a {
        color: #70A1FF;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0px;
        text-decoration: none;

    }
`;
export const ContainerClouse = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 20px;
    width: calc(100% - 20px);
    h1 {
        margin: 0;
    }
`;

// ****************Input*******************
export const ContainerInput = styled.div`
    width: 90%;
    @media ${MQ.md} {
        width: 70%;
    }
`;
export const InputSC = styled.div`
    border: 2px solid #70A1FF;
    border-radius: 4px;
    padding: 15px 20px;
    display: flex;
    @media ${MQ.lg} {
        padding: 20px;
    }
`;
export const ImgSC = styled.div`
    width: 20px;
    height: 20px;
    background: #70A1FF;
`;
export const ContainerLabelInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 20px;
    position: relative;
    label {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 16px;
        transition: top .3s;
    }
    input {
        border: none;
        outline: none;
        @media ${MQ.md} {
            font-size: 13px;
        }
        @media ${MQ.lg} {
            font-size: 16px;
        }
    }
    input:focus ~ label {
        top: -15px;
        font-size: 10px;
    }
`;
export const ErrorMessage = styled.p`
    color: #FF6B81;
    font-size: 10px;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 12px;
    margin-left: 20px;
`;


// *******************Button ***************

export const ButtonContainer = styled.div`
    input {
        background: #70A1FF;
        border: none;
        outline: none;
        margin-bottom: 20px;
        margin-top: 30px;
        width: 160px;
        height: 50px;
        color: white;
        font-size: 15px;
        font-weight: 600;
        border-radius: 4px;
        @media ${MQ.lg} {
            font-size: 16px;
            height: 60px;
            width: 200px;
        }
    }
`;