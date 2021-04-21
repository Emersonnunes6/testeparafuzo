import React, { useContext} from 'react'
import Button from '@material-ui/core/Button';
import {DivForm, DivLabel, InputPlaca} from './style'
import loading from '../img/loading.svg'
import check from '../img/check.png'
import GlobalStateContext from '../../globalState/globalStateContext'
import SimpleAlerts from './alerta';

const MenuEntrada = (props) => {
    const {states} = useContext(GlobalStateContext)

    const rendEntrada = () => {
        switch(states.entrada){
        case "entrada":
        return (
            <DivForm>
                <DivLabel><label>Numero da placa:</label></DivLabel>
                <InputPlaca
                    required
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
        )
        case "loading":
            return <DivForm>
                <img src={loading} alt="loading"></img>
                <p>Registrando...</p>
            </DivForm> 
        case "check": 
            return <DivForm>
                <img src={check} alt="check"></img>
                <p>Registrado!!!</p>
            </DivForm>
        case "erro": 
            return (
                <DivForm>
                <InputPlaca
                    required
                    placeholder="AAA-0000"
                    value={props.inputEntrada}
                    onChange={props.onChangeEntrada}
                />
                <SimpleAlerts/>
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
            )
        default: 
        }
    }

    return (
        <div>
            {rendEntrada()}
        </div>
    )
}

export default MenuEntrada