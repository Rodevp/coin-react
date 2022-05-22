import { atom } from 'jotai'
import { CoinTop } from '../types'


const INITIAL_STATE: Array<CoinTop> = []

export const topCoinsAtom = atom(INITIAL_STATE)