import { Coin } from "../types";

export const dataMapCoin = (coins: any): Array<Coin> => {

    return coins.map( ( coin: any ) => {
        return {
          uuid: coin.uuid,
          name: coin.name,
          price: Number( coin.price ),
          marketCap: coin.marketCap,
          image: coin.iconUrl,
          symbol: coin.symbol,
          color: coin.color
        }
      })

}