import logo from '../../components/img/avatar_white.svg'
import menu from '../../components/img/menu.svg'
import Paper from '@material-ui/core/Paper';
import { DivCard, DivPrincipal, Header, ImgLogo, ImgMenu } from "./styles"
import { useContext, useEffect } from 'react';
import GlobalStateContext from '../../globalState/globalStateContext';
import { useHistory, useParams } from 'react-router';
import { irPaginaInicial } from '../../routes/cordinator';

const Historico = () => {
    
    const history = useHistory()

    const param = useParams()

    const {requests, states} = useContext(GlobalStateContext)

    //UseEffect que faz a requisição de historico logo na renderizacao da tela
    useEffect(() => {
        requests.listarHistorico(param.placa)
    }, [requests, param.placa])

    return (
        <DivPrincipal>
            <Header>
                <ImgLogo onClick={() => irPaginaInicial(history)} alt="Logo" src={logo}/>
                <ImgMenu alt="menu" src={menu}/>
            </Header>
                {states.historicoPlaca.map((viagem) => {
            return (
                <Paper
                    key={viagem.time}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        margin: '5px',
                        width: '344px',
                        height: '100px'
                    }}
                  >
                    <DivCard>
                        <label>TEMPO TOTAL</label>
                        <p>{viagem.time}</p>
                    </DivCard>
                    <DivCard>
                        <label>PAGAMENTO</label>
                        {viagem.paid === true && <p>Pago</p>}
                    </DivCard>
                </Paper>
            )
        })}
        </DivPrincipal>
    )
}

export default Historico