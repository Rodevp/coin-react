const headers = {
    'X-RapidAPI-Host': import.meta.env.VITE_HOST_RAPIDAPI,
    'X-RapidAPI-Key': import.meta.env.VITE_HOST_RAPIDAPI_KEY
}

export const getCoins = async (): Promise<any> => {

    try {
        
        const response = fetch('https://coinranking1.p.rapidapi.com/coins', {
            method: 'GET',
            headers
        })

        const data =  (await response).json()

        return await data

    } catch (error) {
        console.error('error -> ', error)
    }
}