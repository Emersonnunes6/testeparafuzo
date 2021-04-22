import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SimpleBackdrop from '../backdrop/backdrop';
import MenuEntrada from './menuEntrada';
import MenuSaida from './menuSaida';
import { corEntrada, corSaida, tamanhoPaper } from './funcoesStyle';
import GlobalStateContext from '../../globalState/globalStateContext';

export default function CenteredTabs(props) {

  //Objetos do globalState
  const {states, setters} = useContext(GlobalStateContext)

  //Estado que controla os botoes Entrada/Saida
  const [value, setValue] = React.useState(0);
  
  
  //Funções que controlam o backdrop
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = () => {
    setters.setOpen(!states.open);
  };

  //Função que renderiza o backdrop
  const rendBackdrop = () => {
    if(states.open === !false){
      return <div>
      <SimpleBackdrop
        open={states.open}
      />
    </div>
    }
  }

  //Função que renderiza entrada ou saida de acordo com o botao selecionado
  const rendMenu = () => {
    if(value === 0){
      return (
        <MenuEntrada
          onClickEntrada={props.onClickEntrada}
        />
      )
    }else return (
        <MenuSaida
          handleToggle={handleToggle}
        />
    )
  }

  return (
    <Paper
      style={{
        marginTop: '40px',
        width: '344px',
        height: tamanhoPaper(value)
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor= "primary"
        textColor= "primary"
        centered
      >
        <Tab style={{
          width: '172px',
          backgroundColor: corEntrada(value)
        }}
        label="Entrada" />
        <Tab style={{
          width: '172px',
          backgroundColor: corSaida(value)
        }}
        label="Saída" />
      </Tabs>
        {rendMenu()}
        {rendBackdrop()}
    </Paper>
  );
}