export interface Items {
    name: string
    type: string
    image: string
    height: number
    moves: { move: { name: string } }[]
}

export interface Item {
    name: string
    types: { type: { name: string } }[]
    height: number
    weight: number
    moves: { move: { name: string } }[]
    sprites: { other: { home: { front_default: string } } }[]
}