import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import loading from '../../img/loading.svg'
import check from '../../img/check.png'
import SimpleAlerts from '../../abas/alerta'
import GlobalStateContext from '../../../globalState/globalStateContext';
import { DivCondicional } from '../../abas/style';

const BackdropSaida = () => {
    //objetos globalState
    const { inputs, states, requests, setters } = useContext(GlobalStateContext)

    //Função que muda o estado da tela de saida do backdrop para 'loading'
    //enquanto chama a requisição de saida, caso dê certo, a tela mostra um aviso de sucesso
    //e o backdrop é fechado
    //caso dê errado, é mostrada uma mensagem de erro e o backdrop é fechado
    const registrarSaida = () => {
        setters.setBackdropSaida("loading")
        setTimeout(() => {
            requests.saidaEstacionamento(inputs.inputSaida)
        }, 2000)
    }

    const fecharBackdrop = () => {
        setters.setOpen(false)
    }

     //Função que renderiza a tela de saida de acordo com o passo que a requisição se encontra
    const rendBackdropSaida = () => {
        switch(states.backdropSaida){
            //tela de confirmacao que mostra a placa e o botao de confirmar
            case "liberar":
                return (
                    <DivCondicional>
                        <p>Confirma a saída<br/>da placa abaixo?</p>
                        <h1>{inputs.inputSaida}</h1>
                        <Button 
                            style={{
                            width: '312px',
                            height: '67px',
                            marginTop: '20px',
                            backgroundColor: '#A769B2',
                            color: 'white'
                        }}
                        onClick={registrarSaida}
                        variant="contained" 
                        >Liberar saída
                        </Button>
                        <Button 
                            style={{
                            width: '312px',
                            height: '67px',
                            backgroundColor: 'white'
                        }} 
                        color= 'primary'
                        onClick={fecharBackdrop}
                        >Voltar
                        </Button>
                    </DivCondicional>
                )
            case "loading":
                //tela de carregamento 
                return (
                    <DivCondicional>
                        <img src={loading} alt="loading"></img>
                        <p>Confirmando...</p>
                    </DivCondicional> 
                )
            case "check":
                //tela de confirmação caso a requisição seja feita com sucesso 
                return (
                    <DivCondicional>
                        <img src={check} alt="check"></img>
                        <p>Saída liberada!</p>
                    </DivCondicional> 
                )
            case "erro":
                //tela que retorna uma mensagem de erro caso a requisição nao for completada
                return (
                    <DivCondicional>
                        <SimpleAlerts/>
                    </DivCondicional>
                )
            default:
        }
    }

    return (
        <div>
            {rendBackdropSaida()}
        </div>
    )
}

export default BackdropSaida