import React, {useContext} from 'react';
import {InputPlaca, DivSaida, DivLabel} from './style'
import Button from '@material-ui/core/Button';
import GlobalStateContext from '../../globalState/globalStateContext';
import { irParaHistorico } from '../../routes/cordinator';
import { useHistory } from 'react-router';

const MenuSaida = (props) => {
    const history = useHistory()

    //Objeto do globalState que guarda os inputs e os sets
    const {inputs, onChanges, setters} = useContext(GlobalStateContext)

    //Função que muda o state para pagamento e renderiza a tela correta no backdrop
    const onClickPagamento = () => {
        props.handleToggle()
        setters.setBackdrop("pagamento")
      }
    
    //Função que muda o state para saida e renderiza a tela correta no backdrop
      const onClickSaida = () => {
        props.handleToggle()
        setters.setBackdrop("saida")
      }
    
    //Função que usa o coordinator para encaminhar o usuario para o historico da placa
      const onClickHistorico = () => {
          irParaHistorico(history, inputs.inputSaida)
      }

    //Pagina de saida completa
    return (
        <DivSaida>
            <DivLabel><label>Numero da placa:</label></DivLabel>
            <InputPlaca
                required
                placeholder="AAA-0000"
                value={inputs.inputSaida}
                onChange={onChanges.onChangeSaida}
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
            onClick={onClickHistorico} 
            >Ver histórico
            </Button>
      </DivSaida>
    )
}

export default MenuSaida