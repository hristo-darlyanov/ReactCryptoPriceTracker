import axios from "axios"
import moment from "moment"

const formatSparkline = (numbers) => {
    const sevenDaysAgo = moment().subtract(7, 'days').unix()
    let formattedSparkline = numbers.map((item, index) => {
        return {
            timestamp: sevenDaysAgo + (index+1) * 3600,
            value: item,
        }
    })

    return formattedSparkline
}

const formatMarketData = (data) => {
    let formattedData = [];
    data.forEach(item => {
        const formattedSparkline = formatSparkline(item.sparkline_in_7d.price)
        const formattedItem = {
            ...item,
            sparkline_in_7d: {
                price: formattedSparkline
            }
        }
        formattedData.push(formattedItem)
    })
    
    return formattedData
}

export const getMarketData = async () => {
    try {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d&locale=en&precision=2"
        const response = await axios.get(url)
        const formattedResponse = formatMarketData(response.data)

        return formattedResponse
    }
    catch (error) {
        console.log(error.message)
    }
}