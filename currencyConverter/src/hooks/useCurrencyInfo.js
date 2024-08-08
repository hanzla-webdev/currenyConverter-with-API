import { useState, useEffect } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_EXiPECedXwbqQa25GjN4onahYffGUWLPnte6112m`)
            .then(res => (res.json()))
            .then(res => (setData(res)))
            .catch(error => console.error('Error:', error))
        console.log(data)
    }, [currency])

    return data
}

export default useCurrencyInfo