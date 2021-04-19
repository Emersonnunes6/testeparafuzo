import Button from '@material-ui/core/Button';
import {DivForm, InputPlaca} from './style'

const MenuEntrada = (props) => {
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
                onClick={props.onClickBackdrop} 
            >Confirmar entrada
            </Button>
      </DivForm>
    )
}

export default MenuEntrada