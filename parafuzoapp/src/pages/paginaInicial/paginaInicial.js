import {useContext} from 'react'
import { DivPrincipal, Header, ImgLogo, ImgMenu } from "./styles"
import logo from '../../components/img/avatar_white.svg'
import menu from '../../components/img/menu.svg'
import CenteredTabs from "../../components/abas/abas"
import GlobalStateContext from '../../globalState/globalStateContext'

const PaginaInicial = () => {

    const { requests, setters, inputs } = useContext(GlobalStateContext)

    //Função que chama a requisição de entrada e vai mudando a renderizacao de acordo com o 
    //momento da requisição
    const registroEntrada = () => {
        setters.setEntrada("loading")
        setTimeout(() => {
            requests.entradaEstacionamento(inputs.inputEntrada)
        }, 2000)
        setTimeout(() => {
            setters.setEntrada("entrada")
        }, 4000)
    }   
  
    return (
        <div>
            <Header>
                <ImgLogo alt="Logo" src={logo}/>
                <ImgMenu alt="menu" src={menu}/>
            </Header>
            <CenteredTabs
                onClickEntrada={registroEntrada}
            />
        <DivPrincipal>
            
                
        </DivPrincipal>
        </div>
    )
}

export default PaginaInicial