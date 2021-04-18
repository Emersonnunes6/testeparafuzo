import React from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'

const GlobalState = (props) => {

    const entradaEstacionamento = () => {
        const body = {
            'plate': 'AAA-2222'
        }

        axios.post('https://parking-lot-to-pfz.herokuapp.com/parking', body)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    const requests = {entradaEstacionamento}

    const data = {requests}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState