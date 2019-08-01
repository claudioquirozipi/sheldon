import styled from 'styled-components';
import { MQ } from '@app/config/const';

export const HeaderSC = styled.div`
    background: #70A1FF;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 25px 0;
    @media ${MQ.lg} {
        padding: 44px 60px 0;
    }
    h1, h2 {
        margin: 0;
        color: white;
    }
    & > h1 {
        font-size: 15px;
        @media ${MQ.md} {
            font-size: 25px;
        }
        @media ${MQ.lg} {
            font-size: 30px;
        }
    }
    div {
        display: flex;
        h2 {
            font-size: 15px;
            margin-left: 25px;
            @media ${MQ.md} {
                font-size: 25px;
                margin-left: 40px;
            }
            @media ${MQ.lg} {
                font-size: 30px;
                margin-left: 77px;
            }
        }
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {
        color: white;
        text-align: center;
        font-size: 26px;
        margin: 0;
        @media ${MQ.md} {
            font-size: 50px;
        }
        @media ${MQ.lg} {
            font-size: 90px;
        }
    }
    button {
        background: white;
        color: #0D4680;
        border: none;
        outline: none;
        border-radius: 50px;
        font-size: 30px;
        margin-top: 50px;
        padding: 10px 100px;
        @media ${MQ.md} {
            margin-top: 150px;
        }
        @media ${MQ.lg} {
            padding: 10px 140px;
            font-size: 50px;
        }
    }
`;

export const ChatContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    padding-bottom: 40px;
    @media ${MQ.md}{
        padding-bottom: 60px;
        padding-right: 40px;
    }
    @media ${MQ.lg} {
        padding-right: 60px;
        padding-bottom: 230px;
    }
    div {
        background: white;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        @media ${MQ.md} {
            width: 85px;
            height: 85px;
        }
        @media ${MQ.lg} {
            width: 116px;
            height: 116px;
        }
    }
`;