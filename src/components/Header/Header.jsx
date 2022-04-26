import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { currencies } from '../../currencies'
import style from './Header.module.css'

const Header = () => {

  const [USDrate, setUSDrate] = useState('')
  const [EURrate, setEURrate] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const USDres = await axios.get(`https://open.er-api.com/v6/latest/USD`)
      setUSDrate(USDres.data.rates[currencies[0]])
      const EURres = await axios.get(`https://open.er-api.com/v6/latest/EUR`)
      setEURrate(EURres.data.rates[currencies[0]])
    }
    fetchData()
      .catch(console.error);
  }, [])

  return (
    <div className={style.main}>
      <h1 className={style.header}>Currency Converter</h1>
      <div className={style.rate}>
          <h2 className={style.usd}>{USDrate}</h2>
      <h2 className={style.eur}>{EURrate}</h2>
      </div>
    
    </div>
  )
}

export default Header