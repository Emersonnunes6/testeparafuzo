import styled from 'styled-components'

export const DivEntradaSaida = styled.div`
    width: 344px;
    height: 279px;
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`

export const DivLabel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 305px;
label {
    font-size: 14px;
    color: grey;
}
`

export const DivSaida = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const InputPlaca = styled.input`
    height: 67px;
    width: 305px;
    text-align: center;
    background-color: #FFFBE6;
    border: 2px solid #F2F2F2;
    border-radius: 4px;
    font-size: 25px;
    margin: 5px;
:focus {
    border: 2px solid grey;
} 
`

export const DivCondicional = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 4px;
    height: 294px;
    width: 339px;
    p{
        color: black;
        text-align: center;
        padding: 0;
        margin: 0;
    }
    h1{
        color: #4DD0E1;
        padding: 0;
        margin: 0;
        margin-top: 5px;
    }
`