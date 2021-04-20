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
    height: 210px;
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
    height: 350px;
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