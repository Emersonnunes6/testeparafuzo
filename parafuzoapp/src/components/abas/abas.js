import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SimpleBackdrop from '../backdrop/backdrop';
import MenuEntrada from './menuEntrada';
import MenuSaida from './menuSaida';
import { corEntrada, corSaida, tamanhoPaper } from './funcoesStyle';

export default function CenteredTabs(props) {

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Funções que controlam o backdrop
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const rendBackdrop = () => {
    if(open === !false){
      return <div>
      <SimpleBackdrop
        open={open}
        onClickClose={handleClose}
      />
    </div>
    }
  }

  const rendMenu = () => {
    if(value === 0){
      return (
        <MenuEntrada
          inputEntrada={props.inputEntrada}
          onChangeEntrada={props.onChangeEntrada}
          onClickEntrada={props.onClickEntrada}
        />
      )
    }else return (
        <MenuSaida
          inputSaida={props.inputSaida}
          onChangeSaida={props.onChangeSaida}
          onClickBackdrop={handleToggle}
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