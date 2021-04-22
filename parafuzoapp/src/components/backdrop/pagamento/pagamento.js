import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import loading from '../../img/loading.svg'
import check from '../../img/check.png'
import SimpleAlerts from '../../abas/alerta'
import GlobalStateContext from '../../../globalState/globalStateContext';
import { DivCondicional } from '../../abas/style';

const BackdropPagamento = () => {
    //objetos do globalState
    const { inputs, states, setters, requests } = useContext(GlobalStateContext)

    //Função que muda o estado da tela de pagamento do backdrop para 'loading'
    //enquanto chama a requisição de pagamento, caso dê certo, a tela mostra um aviso de sucesso
    //e o backdrop é fechado
    //caso dê errado, é mostrada uma mensagem de erro e o backdrop é fechado
    const registrarPagamento = () => {
        setters.setBackdropPagamento("loading")
        setTimeout(() => {
            requests.pagamentoEstacionamento(inputs.inputSaida)
        }, 2000)
    }

    const fecharBackdrop = () => {
        setters.setOpen(false)
    }

    //Função que renderiza a tela de pagamento de acordo com o passo que a requisição se encontra
    const rendPagamento = (props) => {
        switch(states.backdropPagamento){
            //tela de confirmacao que mostra a placa e o botao de confirmar
            case "pagar": 
                return (
                    <DivCondicional>
                        <p>Confirma o pagamento<br/>da placa abaixo?</p>
                        <h1>{inputs.inputSaida}</h1>
                        <Button 
                            style={{
                            width: '312px',
                            height: '67px',
                            marginTop: '20px',
                            backgroundColor: '#A769B2',
                            color: 'white'
                        }}
                        onClick={registrarPagamento}
                        variant="contained"
                        >Confirma
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
                        <p>Pagando...</p>
                    </DivCondicional> 
                )       
                //tela de confirmação caso a requisição seja feita com sucesso   
            case "check": 
                return (
                    <DivCondicional>
                        <img src={check} alt="check"></img>
                        <p>Pagamento realizado!</p>
                    </DivCondicional> 
                )
                //tela que retorna uma mensagem de erro caso a requisição nao for completada
            case "erro": 
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
            {rendPagamento()}
        </div>
    )
}

export default BackdropPagamento