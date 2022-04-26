import React from 'react'
import { currencies } from '../../../currencies'
import style from './CurrencyField.module.css'

const CurrencyField = (props) => {
    return (
        <div>
            <input type="number"
                className={[style.input, style.main].join(' ')}
                value={props.value}
                onChange={props.inputFunc} />
            <select
                onChange={props.selectFunc}
                className={[style.select, style.main].join(' ')}>
                {currencies.map(currency => (
                    currency === props.reverseСurrency ?
                        <option key={currency} value={currency} disabled>{currency}</option>
                        : <option key={currency} value={currency}>{currency}</option>))}
            </select>
        </div>
    )
}

export default CurrencyField