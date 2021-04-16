import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import { DivForm } from './style';
import Button from '@material-ui/core/Button';

export default function CenteredTabs() {

  const [value, setValue] = React.useState(0);

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

  return (
    <Paper
      style={{
        marginTop: '40px',
        width: '344px',
        height: '279px'
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
      <DivForm>
      
        <Button 
          style={{
            width: '312px',
            height: '67px',
            backgroundColor: '#28DD91',
            color: 'white'
          }}
          variant="contained" 
        >Confirmar entrada
        </Button>
      </DivForm>
    </Paper>
  );
}