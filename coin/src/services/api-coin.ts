const headers = {
    'X-RapidAPI-Host': import.meta.env.VITE_HOST_RAPIDAPI,
    'X-RapidAPI-Key': import.meta.env.VITE_HOST_RAPIDAPI_KEY
}

export const getCoins = async (): Promise<any> => {

    try {
        
        const response: Promise<Response> = fetch('https://coinranking1.p.rapidapi.com/coins', {
            method: 'GET',
            headers
        })
        
        const data = (await response).json()
        
        return await data

    } catch (error) {
        console.error('error -> ', error)
    }
}

export const getHistoryCoin = async (period: string, id: string): Promise<any> => {
    
    const URL = `https://coinranking1.p.rapidapi.com/coin/${id}/history?timePeriod=${period}`
    
    console.log(URL)

    try {
        
        const response: Promise<Response> = fetch(URL, {
            method: 'GET',
            headers
        })
        
        const data = (await response).json()
        
        return await data

    } catch (error) {
        console.error('error -> ', error)
    }
}