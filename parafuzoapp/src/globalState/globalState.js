import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [entrada, setEntrada] = useState("entrada")
    const [saida, setSaida] = useState()

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
            console.log(res.data)
            setEntrada("check")
        }).catch((err) => {
            setters.setEntrada("erro")
            setTimeout(() => {
                setters.setEntrada("entrada")
            }, 3000)
            console.log(err.message)
        })
    }

    const saidaEstacionamento = (placa) => {

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post(`https://parking-lot-to-pfz.herokuapp.com/parking/${placa}/out`, axiosConfig)
        .then((res) => {
            console.log(res.data)
            alert("Saída liberada!!!")
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const pagamentoEstacionamento = (placa) => {

        let axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post(`https://parking-lot-to-pfz.herokuapp.com/parking/${placa}/pay`, axiosConfig)
        .then((res) => {
            console.log(res.data)
            alert("Pagamento efetuado!!!")
        }).catch((err) => {
            console.log(err.message)
        })
    }


    const requests = {entradaEstacionamento, pagamentoEstacionamento, saidaEstacionamento}
    const states = {entrada, saida}
    const setters = {setEntrada, setSaida}

    const dados = {requests, states, setters}

    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState