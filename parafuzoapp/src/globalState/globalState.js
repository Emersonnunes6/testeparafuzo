import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'
import useValorInput from '../customHooks/useInput'

const GlobalState = (props) => {

    //Estado que controla o backdrop
    const [open, setOpen] = useState(false);
    
    //Estados que controlam a tela que será renderizada dentro do backdrop
    const [entrada, setEntrada] = useState("entrada")
    const [backdrop, setBackdrop] = useState()
    const [backdropSaida, setBackdropSaida] = useState("liberar")
    const [backdropPagamento, setBackdropPagamento] = useState("pagar")
    const [menu, setMenu] = useState("inicio")

    //Inputs de entrada e saida
    const [inputEntrada, onChangeEntrada] = useValorInput()
    const [inputSaida, onChangeSaida] = useValorInput()

    //Array que é setada com o historico que vem da requisição 
    const [historicoPlaca, setHistoricoPlaca] = useState([])

    //Requisição de entrada 
    const entradaEstacionamento = (placa) => { 

        let data = { 
            plate: placa 
        }

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post("https://parking-lot-to-pfz.herokuapp.com/parking", data, axiosConfig)
        .then((res) => {
            setEntrada("check")
        }).catch((err) => {
            setters.setEntrada("erro")
            setTimeout(() => {
                setters.setEntrada("entrada")
            }, 3000)
        })
    }

    //Requisição de pagamento
    const pagamentoEstacionamento = (placa) => {

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post(`https://parking-lot-to-pfz.herokuapp.com/parking/${placa}/pay`, axiosConfig)
        .then((res) => {
            setBackdropPagamento("check")
            setTimeout(() => {
                setters.setOpen(false)  
              }, 2000) 
        }).catch((err) => {
            setBackdropPagamento("erro")
            setTimeout(() => {
              setters.setOpen(false)  
            }, 2000) 
        })
    }
    
    //Requisição de saida
    const saidaEstacionamento = (placa) => {

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post(`https://parking-lot-to-pfz.herokuapp.com/parking/${placa}/out`, axiosConfig)
        .then((res) => {
            setBackdropSaida("check")
            setTimeout(() => {
                setters.setOpen(false)  
              }, 2000)
        }).catch((err) => {
            setBackdropSaida("erro")
            setTimeout(() => {
                setters.setOpen(false)  
              }, 2000) 
        })
    }

    //Requisição que retorna o historico da placa 
    const listarHistorico = (placa) => {

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.get(`https://parking-lot-to-pfz.herokuapp.com/parking/${placa}`, axiosConfig)
        .then((res) => {
            setHistoricoPlaca(res.data)
        }).catch((err) => {
            
        })

    }

    //Objetos separados por categoria
    const requests = {entradaEstacionamento, pagamentoEstacionamento, saidaEstacionamento, listarHistorico}
    const states = {entrada, backdrop, backdropSaida, backdropPagamento, open, historicoPlaca, menu}
    const setters = {setEntrada, setBackdrop, setBackdropSaida, setBackdropPagamento, setOpen, setMenu}
    const inputs = { inputSaida, inputEntrada}
    const onChanges = { onChangeSaida, onChangeEntrada }

    //objeto que retorna todos os outros para o globalState
    const dados = {requests, states, setters, inputs, onChanges}

    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState