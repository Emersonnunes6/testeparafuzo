import React, { useContext} from 'react'
import Button from '@material-ui/core/Button';
import {DivForm, InputPlaca} from './style'
import loading from '../img/loading.svg'
import check from '../img/check.png'
import GlobalStateContext from '../../globalState/globalStateContext'

const MenuEntrada = (props) => {
    const {states} = useContext(GlobalStateContext)

    const rendEntrada = () => {
        if(states.entrada === 0){
        return (
            <DivForm>
                <InputPlaca
                    placeholder="AAA-0000"
                    value={props.inputEntrada}
                    onChange={props.onChangeEntrada}
                />
                <Button 
                    style={{
                    width: '312px',
                    height: '67px',
                    margin: '5px',
                    backgroundColor: '#28DD91',
                    color: 'white'
                }}
                    variant="contained"
                    onClick={props.onClickEntrada}
                >Confirmar entrada
                </Button>
            </DivForm>
        )}else if(states.entrada === 1){ 
            return <DivForm>
                <img src={loading} alt="loading"></img>
                <p>Registrando...</p>
            </DivForm> 
        }else return <DivForm>
            <img src={check} alt="check"></img>
            <p>Registrado!!!</p>
        </DivForm>
}
    return (
        <div>
            {rendEntrada()}
        </div>
    )
}

export default MenuEntrada