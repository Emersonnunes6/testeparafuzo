import {InputPlaca, DivSaida, DivLabel} from './style'
import Button from '@material-ui/core/Button';

const MenuSaida = (props) => {
    return (
        <DivSaida>
            <DivLabel><label>Numero da placa:</label></DivLabel>
            <InputPlaca
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
            onClick={props.onClickBackdrop} 
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
            onClick={props.onClickBackdrop} 
            >Saída
            </Button>
            <Button 
                style={{
                width: '312px',
                height: '67px',
                margin: '5px',
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