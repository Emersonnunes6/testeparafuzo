import React, {useContext} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { DivCondicional } from '../abas/style';
import GlobalStateContext from '../../globalState/globalStateContext';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop(props) {
  const classes = useStyles();
  const {states} = useContext(GlobalStateContext)

  const rendSaida = () => {
    switch(states.saida){
      case "pagamento": 
        return (
          <DivCondicional>
              <p>Confirma o pagamento<br/>da placa abaixo?</p>
              <h1>AAA-1234</h1>
            <Button 
                style={{
                width: '312px',
                height: '67px',
                marginTop: '20px',
                backgroundColor: '#A769B2',
                color: 'white'
            }}
            variant="contained" 
            onClick={props.onClickBackdrop} 
            >Confirma
            </Button>
            <Button 
                style={{
                width: '312px',
                height: '67px',
                backgroundColor: 'white'
            }} 
            color= 'primary'
            onClick={props.onClickBackdrop} 
            >Voltar
            </Button>
          </DivCondicional>
        )
    case "saida":
      return (
        <DivCondicional>
          <p>Confirma a saída<br/>da placa abaixo?</p>
          <h1>AAA-1234</h1>
          <Button 
              style={{
              width: '312px',
              height: '67px',
              marginTop: '20px',
              backgroundColor: '#A769B2',
              color: 'white'
          }}
          variant="contained" 
          onClick={props.onClickBackdrop} 
          >Liberar saída
          </Button>
          <Button 
              style={{
              width: '312px',
              height: '67px',
              backgroundColor: 'white'
          }} 
          color= 'primary'
          onClick={props.onClickBackdrop} 
          >Voltar
          </Button>
        </DivCondicional>
      )
    default:
    }
  }

  return (
      <Backdrop className={classes.backdrop} open={props.open} onClick={props.onClickClose}>
          {rendSaida()}
      </Backdrop>
  );
}