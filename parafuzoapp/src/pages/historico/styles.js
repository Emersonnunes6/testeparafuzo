import styled from 'styled-components'

export const DivPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F2F2F2;
    width: 100vw;
    height: 100%;
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 60px;
    background-color: #4DD0E1;
`

export const ImgLogo = styled.img`
    height: 29,77px;
    width: 40px;
    margin-left: 10px;
`

export const ImgMenu = styled.img`
    height: 36px;
    width: 36px;
    margin-right: 10px;
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 80%;
    width: 40%;
    label{
        margin: 1px;
        font-size: 12px;
        color: grey;
    }
    p{
        margin: 0;
        font-size: 22px;
    }
`
