import {InputPlaca, DivSaida} from './style'
import Button from '@material-ui/core/Button';

const MenuSaida = (props) => {
    return (
        <DivSaida>
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
                color: '#A769B2'
            }}
            variant="outlined" 
            onClick={props.onClickBackdrop} 
            >Saída
            </Button>
      </DivSaida>
    )
}

export default MenuSaida