import {useState} from 'react'

const useValorInput = () => {
   const [valorInput, setValorInput] = useState('')
    const onChangeValor = (event) => {
        setValorInput(event.target.value)
    }
   
    return [valorInput, onChangeValor]

}

export default useValorInput