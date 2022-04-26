import React from 'react'
import { currencies } from '../../../helper'

const CurrencyField = (props) => {
    return (
        <div>
            <input type="number" value={props.value} onChange={props.inputFunc} />
            <select onChange={props.selectFunc}>
                {currencies.map(currency => (
                    currency === props.reverseСurrency ?
                        <option key={currency} value={currency} disabled>{currency}</option>
                        : <option key={currency} value={currency}>{currency}</option>))}
            </select>
        </div>
    )
}

export default CurrencyField