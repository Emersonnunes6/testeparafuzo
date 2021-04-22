import React, {useContext} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundPagamento from './pagamento/pagamento'
import GlobalStateContext from '../../globalState/globalStateContext';
import BackdropSaida from './saida/saida';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop(props) {
  const classes = useStyles();
  const {states} = useContext(GlobalStateContext)

  //Função que renderiza o backdrop de acordo com o estado global
  const rendSaida = () => {
    switch(states.backdrop){
      case "pagamento": 
        return (
          <div><BackgroundPagamento/></div>
        )
      case "saida":
        return (
          <div><BackdropSaida/></div>
        )
      default:
    }
  }

  return (
      <Backdrop className={classes.backdrop} open={props.open} onClickClose={props.onClickClose}>
          {rendSaida()}
      </Backdrop>
  );
}