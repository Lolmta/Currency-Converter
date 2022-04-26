import React, { useEffect }  from 'react'
import axios from 'axios'

const Header = () => {
  // useEffect(()=>{
  //   axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
  //   .then(res=> {
  //     const data = res.data
  //     console.log(data)
  //   })
  // },[])



  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get(`https://open.er-api.com/v6/latest/UAH`);
        const data = await res.data.rates
        console.log(data)
    }
    fetchData()
    .catch(console.error);
}, [])


  return (
    <div>Header</div>
  )
}

export default Header