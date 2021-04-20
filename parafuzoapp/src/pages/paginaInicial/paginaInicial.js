import {useContext} from 'react'
import { DivPrincipal, Header, ImgLogo, ImgMenu } from "./styles"
import logo from '../../components/img/avatar_white.svg'
import menu from '../../components/img/menu.svg'
import CenteredTabs from "../../components/abas/abas"
import GlobalStateContext from '../../globalState/globalStateContext'
import useValorInput from '../../customHooks/useInput'

const PaginaInicial = () => {
    const { requests, setters } = useContext(GlobalStateContext)
    const [inputEntrada, onChangeEntrada] = useValorInput()
    const [inputSaida, onChangeSaida] = useValorInput()

    const registroEntrada = () => {
        setters.setEntrada("loading")
        setTimeout(() => {
            requests.entradaEstacionamento(inputEntrada)
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
        <DivPrincipal>
                <CenteredTabs
                    valueEntrada={inputEntrada}
                    onChangeEntrada={onChangeEntrada}
                    onClickEntrada={registroEntrada}
                    valueSaida={inputSaida}
                    onChangeSaida={onChangeSaida}
                />
        </DivPrincipal>
        </div>
    )
}

export default PaginaInicial