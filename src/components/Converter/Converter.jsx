import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { currencies } from '../../helper'
import CurrencyField from './CurrencyField/CurrencyField';
import style from './Converter.module.css'

const Converter = () => {

    const [isFirst, setIsFirst] = useState(true)

    const [firstInput, setFirstInput] = useState(1)
    const [secondInput, setSecondInput] = useState(1)

    const [firstCurrency, setFirstCurrency] = useState(currencies[1])
    const [secondCurrency, setSecondCurrency] = useState(currencies[0])


    useEffect(() => {
        const getCurrency = async () => {
            const res = await axios.get(`https://open.er-api.com/v6/latest/${
            isFirst ? firstCurrency : secondCurrency}`);
            const data = await res.data.rates
            isFirst ? setSecondInput((firstInput * data[secondCurrency]).toFixed(2))
                : setFirstInput((secondInput * data[firstCurrency]).toFixed(2))
        }
        getCurrency()
            .catch(console.error);
    }, [firstCurrency, firstInput, secondCurrency, secondInput, isFirst])



    return (
            <div className={style.main}>
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