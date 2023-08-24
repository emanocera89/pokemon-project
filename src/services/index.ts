import { Items, Item } from '@/types'
import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'
const axiosConfig = {
    headers: {
        'Authorization': ``,
        'Content-Type': 'application/json;charset=UTF-8'
    }
}

export const getItem = async ({ id }: { id?: string } = {}): Promise<Item> => {
    try {
        const dataResponse = await axios.get(`${baseUrl}/${id}`, axiosConfig)
        const data: Item = dataResponse.data
        return data
    } catch (error) {
        throw error
    }
}

export const getAllItems = async ({ perPage = 10 }: { perPage?: number } = {}): Promise<Items[]> => {
    try {

        let arr = []

        for (let i = 1; i <= perPage; i++) {
            const dataResponse = await axios.get(`${baseUrl}/${i}`, axiosConfig)
            arr.push({
                name: dataResponse.data.name,
                type: dataResponse.data.types[0].type.name,
                image: dataResponse.data.sprites.other.home.front_default,
                height: Number(dataResponse.data.height),
                moves: dataResponse.data.moves
            })
        }

        return arr
    } catch (error) {
        throw error
    }
}