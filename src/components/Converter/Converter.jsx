import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Converter = () => {



    const currencies = ['UAH', 'USD', 'EUR']
    const apiKey = 'b3bf240f45d69a4d84895f1ad07d9d15c2c1fe9d&from'

    const [rate, setRate] = useState(1)
    const [amount, setAmount] = useState(1)
    const [isFirst, setISFirst] = useState(true)

    const [requestedСurrency, setCurrency] = useState(currencies[0])
    const [currencyResult, setCurrencyResult] = useState(currencies[1])

    useEffect(() => {
        axios.get(
            `https://api.getgeoapi.com/v2/currency/convert?api_key=${apiKey}=${
                isFirst?requestedСurrency:currencyResult}&to=${
                isFirst?currencyResult:requestedСurrency}&amount=${
                isFirst?amount:rate}&format=json`)
            .then(res => {
                const data = res.data.rates[isFirst?currencyResult:requestedСurrency].rate_for_amount;
                isFirst?setRate(data):setAmount(data)
            })
    }, [amount, currencyResult, requestedСurrency,rate])
     




    return (
        <div>
            <div>
                <input type="number" value={amount}
                    onChange={(e) => { 
                        setISFirst(true)
                        setAmount(e.target.value); }} />


                <select onChange={(e) => setCurrency(e.target.value)}>
                    {currencies.map(currency => (
                        currency === currencyResult ?
                            <option key={currency} value={currency} disabled>{currency}</option>
                            :
                            <option key={currency} value={currency}>{currency}</option>))}
                </select>
            </div>

            <div>
                <input type="number" value={rate} 
                onChange={(e) => {
                    setISFirst(false)
                    setRate(e.target.value)}} />


                <select name="" id="" onChange={(e) => setCurrencyResult(e.target.value)}>
                    {currencies.map(currency => (
                        currency === requestedСurrency ?
                            <option key={currency} value={currency} disabled>{currency}</option>
                            :
                            <option key={currency} value={currency}>{currency}</option>))}
                </select>
            </div>
        </div>
    )
}

export default Converter