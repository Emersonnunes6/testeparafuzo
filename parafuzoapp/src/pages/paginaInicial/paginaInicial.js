import { DivPrincipal, Header, ImgLogo, ImgMenu } from "./styles"
import logo from '../../components/img/avatar_white.svg'
import menu from '../../components/img/menu.svg'
import CenteredTabs from "../../components/abas/abas"

const PaginaInicial = () => {
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