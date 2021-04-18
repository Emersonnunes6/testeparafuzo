import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import { DivForm, InputPlaca, DivSaida } from './style';
import Button from '@material-ui/core/Button';

export default function CenteredTabs() {

  const [value, setValue] = React.useState(0);

  const tamanhoPaper = () => {
      if(value === 0){
        return '279px'
    }else return '350px'
  }

  const corEntrada = () => {
      if(value === 0){
        return 'white'
    }else return '#F2F2F2'
  }
  
  const corSaida = () => {
    if(value === 0){
      return '#F2F2F2'
  }else return 'white'
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const rendMenu = () => {
    if(value === 0){
      return (
      <DivForm>
      <InputPlaca
        placeholder="AAA-0000"
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
      >Confirmar entrada
      </Button>
      </DivForm>
      )
    }else return (
      <DivSaida>
        <InputPlaca
          placeholder="AAA-0000"
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
      >Saída
      </Button>
      </DivSaida>
    )
  }

  return (
    <Paper
      style={{
        marginTop: '40px',
        width: '344px',
        height: tamanhoPaper()
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
          backgroundColor: corEntrada()
        }}
        label="Entrada" />
        <Tab style={{
          width: '172px',
          backgroundColor: corSaida()
        }}
        label="Saída" />
      </Tabs>
        {rendMenu()}
    </Paper>
  );
}