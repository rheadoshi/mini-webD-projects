import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect( () =>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        const response = fetch(url)
        .then((response) => {
            return response.json()
        })
        .then( (resp) => {
            return setData(resp[currency])
        })
        .catch( (error) => {console.log(error)})
    }, [currency] ) //dependency
}

export default useCurrencyInfo;