import {useContext} from 'react'
import { DivPrincipal, Header, ImgLogo, ImgMenu } from "./styles"
import logo from '../../components/img/avatar_white.svg'
import menu from '../../components/img/menu.svg'
import CenteredTabs from "../../components/abas/abas"
import GlobalStateContext from '../../globalState/globalStateContext'
import useValorInput from '../../customHooks/useInput'

const PaginaInicial = () => {
    const { requests } = useContext(GlobalStateContext)
    const [inputEntrada, onChangeEntrada] = useValorInput()
    const [inputSaida, onChangeSaida] = useValorInput()

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
                    onClickEntrada={() => requests.entradaEstacionamento(inputEntrada)}
                    valueSaida={inputSaida}
                    onChangeSaida={onChangeSaida}
                    onClickSaida={() => requests.saidaEstacionamento(inputSaida)}
                    onClickPagamento={() => requests.pagamentoEstacionamento(inputSaida)}
                />
        </DivPrincipal>
        </div>
    )
}

export default PaginaInicial