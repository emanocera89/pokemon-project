import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";
const axiosConfig = {
    headers: {
        'Authorization': ``,
        'Content-Type': 'application/json;charset=UTF-8'
    }
};

export interface Data {
    name: string
    type: string
    image: string
    height: number
    moves: []
    // Otras propiedades del Pokemon si las tienes
}

export interface Item {
    name: string;
    types: { type: { name: string } }[];
    height: number;
    weight: number;
    moves: { move: { name: string } }[];
    sprites: { other: { home: { front_default: string } }}
}

export const getItem = async ({ id }: { id?: string } = {}): Promise<Item> => {
    try {
        const dataResponse = await axios.get(`${baseUrl}/${id}`, axiosConfig);
        const data: Item = dataResponse.data
        return data
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/*export const getAllItems = async ({ perPage = 10 }: { perPage?: number } = {}): Promise<Data[]> => {
    try {

        const dataResponse = await axios.get(`${baseUrl}?limit=${perPage}`, axiosConfig);

        const data = dataResponse.data.results.map((pokemon: { name: string }) => ({
            name: pokemon.name,
        }));

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};*/

export const getAllItems = async ({ perPage = 10 }: { perPage?: number } = {}): Promise<Data[]> => {
    try {

        let arr = []

        for (let i = 1; i <= perPage; i++) {
            const dataResponse = await axios.get(`${baseUrl}/${i}`, axiosConfig);
            arr.push({
                name: dataResponse.data.name,
                type: dataResponse.data.types[0].type.name,
                image: dataResponse.data.sprites.other.home.front_default,
                height: Number(dataResponse.data.height),
                moves: dataResponse.data.moves
            });
        }

        return arr;
    } catch (error) {
        console.error(error);
        throw error;
    }
};