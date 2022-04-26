import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { currencies } from '../../helper'
import CurrencyField from './CurrencyField/CurrencyField';

const Converter = () => {

    const [isFirst, setIsFirst] = useState(true)

    const [firstInput, setFirstInput] = useState(1)
    const [secondInput, setSecondInput] = useState(1)

    const [firstCurrency, setFirstCurrency] = useState(currencies[0])
    const [secondCurrency, setSecondCurrency] = useState(currencies[1])


    useEffect(() => {
        const getCurrency = async () => {
            const res = await axios.get(`https://open.er-api.com/v6/latest/${
            isFirst ? firstCurrency : secondCurrency}`);
            const data = await res.data.rates
            isFirst ? setSecondInput(firstInput * data[secondCurrency]) 
            : setFirstInput(secondInput * data[firstCurrency])
        }
        getCurrency()
            .catch(console.error);
    }, [firstCurrency, firstInput, secondCurrency, secondInput, isFirst])



    return (
        <div>
            <CurrencyField value={firstInput}
                inputFunc={(e) => {
                    setIsFirst(true)
                    setFirstInput(e.target.value)
                }}
                selectFunc={e => setFirstCurrency(e.target.value)}
                reverseСurrency={secondCurrency} />

            <CurrencyField value={secondInput}
                inputFunc={(e) => {
                    setIsFirst(false)
                    setSecondInput(e.target.value)
                }}
                selectFunc={e => setSecondCurrency(e.target.value)}
                reverseСurrency={firstCurrency} />
        </div>
    )
}

export default Converter