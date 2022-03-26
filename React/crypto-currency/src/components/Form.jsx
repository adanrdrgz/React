import { useState, useEffect  } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCryptoCurrency from '../hooks/useSelectCryptoCurrency'
import currencies from '../data/currencies.js'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    margin-top: 30px; 
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`
const Form = ({setCryptoCurrency}) => {

    const [cryptos, setCryptos] = useState([])
    const [error, setError] = useState(false)

    const [ currency, SelectCurrency ] = useSelectCryptoCurrency('Select Currency', currencies)
    const [ crypto, SelectCrypto ] = useSelectCryptoCurrency('Select Crypto', cryptos)
    
    useEffect(() => {
        const consultAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        
            const response = await fetch(url)
            const result = await response.json() 
        
            const cryptosArray = result.Data.map( crypto => {
                
                const obj = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName
                }

                return obj

            })

            setCryptos(cryptosArray)
        }
        consultAPI();
    }, [])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if([currency, crypto].includes('')){
            setError(true)
            return
        }
        setError(false)
        setCryptoCurrency({
            crypto,
            currency
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            
            <form
                onSubmit = {handleSubmit}
            >

                <SelectCurrency />
                <SelectCrypto />

                <InputSubmit 
                    type="submit" 
                    value="Value" 
                />

            </form>
        </>
    )
}

export default Form