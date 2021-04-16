import React from 'react'
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {

    const data = {}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState