import React, {useContext} from 'react';
import {InputPlaca, DivSaida, DivLabel} from './style'
import Button from '@material-ui/core/Button';
import GlobalStateContext from '../../globalState/globalStateContext';

const MenuSaida = (props) => {
    const {setters} = useContext(GlobalStateContext)

    const onClickPagamento = () => {
        props.handleToggle()
        setters.setSaida("pagamento")
      }
    
      const onClickSaida = () => {
        props.handleToggle()
        setters.setSaida("saida")
      }

    return (
        <DivSaida>
            <DivLabel><label>Numero da placa:</label></DivLabel>
            <InputPlaca
                required
                placeholder="AAA-0000"
                value={props.inputSaida}
                onChange={props.onChangeSaida}
            />
            <Button 
                style={{
                width: '312px',
                height: '67px',
                margin: '5px',
                backgroundColor: '#A769B2',
                color: 'white'
            }}
            variant="contained" 
            onClick={onClickPagamento} 
            >Pagamento
            </Button>
            <Button 
                style={{
                width: '312px',
                height: '67px',
                margin: '5px',
                backgroundColor: 'white',
                color: '#A769B2',
                border: '2px solid #A769B2'
            }}
            variant="outlined" 
            onClick={onClickSaida} 
            >Saída
            </Button>
            <Button 
                style={{
                width: '312px',
                height: '20px',
                marginTop: '10px',
                backgroundColor: 'white'
            }} 
            color= 'primary'
            onClick={props.onClickBackdrop} 
            >Ver histórico
            </Button>
      </DivSaida>
    )
}

export default MenuSaida