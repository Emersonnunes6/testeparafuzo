import {useContext} from 'react'
import { DivPrincipal, Header, ImgLogo, ImgMenu } from "./styles"
import logo from '../../components/img/avatar_white.svg'
import menu from '../../components/img/menu.svg'
import CenteredTabs from "../../components/abas/abas"
import GlobalStateContext from '../../globalState/globalStateContext'

const PaginaInicial = () => {
    const { requests } = useContext(GlobalStateContext)

    requests.entradaEstacionamento()

    return (
        <div>
            <Header>
                <ImgLogo alt="Logo" src={logo}/>
                <ImgMenu alt="menu" src={menu}/>
            </Header>
        <DivPrincipal>
                <CenteredTabs/>
        </DivPrincipal>
        </div>
    )
}

export default PaginaInicial