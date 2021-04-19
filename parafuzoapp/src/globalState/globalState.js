import React from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'

const GlobalState = (props) => {

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
            alert("Entrada cadastrada!!!")
        }).catch((err) => {
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

    const dados = {requests}

    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState