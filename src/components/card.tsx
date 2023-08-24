import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useTypeColors from '@/hooks/useTypeColor'

interface Move {
    move: {
        name: string;
    };
}

interface Props {
    id: number
    name: string
    image: string
    type: string
    moves: Move[]
}

// Cantidad máxima de movimientos
const MAX_MOVES = 5

const Card: React.FC<Props> = (props) => {
    const [moveCounter, setMoveCounter] = useState<number>(0)
    const typeColors = useTypeColors(props.type || '')

    const handleIncrementCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (moveCounter < MAX_MOVES) {
            setMoveCounter(moveCounter + 1)
        }
    }

    return (
        <li key={props.id}>
            <Link href="/[id]" as={`/${props.id + 1}`}>

                <div className='shadow-xs hover:shadow-lg rounded bg-white p-6'>
                    <Image
                        src={props.image}
                        width={500}
                        height={500}
                        alt={props.name}
                    />
                    <div className='w-full flex mt-6 flex-col'>
                        <div className='w-full flex'>
                            <h3 className='text-xl inline-flex font-semibold capitalize'>{props.name}</h3>
                            <span className={`table my-auto ml-auto text-xs font-semibold py-1 px-2 uppercase rounded uppercase ${typeColors}`}>{props.type}</span>
                        </div>

                        <ul>
                            {props.moves.map((move, index) => (
                                index < moveCounter &&
                                <li key={index}>{move.move.name}</li>
                            ))}
                        </ul>

                        <div className="w-full">
                            <button
                                onClick={handleIncrementCounter}
                                disabled={moveCounter >= MAX_MOVES}
                                className='border-blue-500 hover:bg-blue-500 border-2 text-blue-500 hover:text-white font-semibold py-2 px-4 rounded mt-8 w-full border-solid transition-all duration-100 ease'
                            >
                                Add movement
                            </button>
                        </div>

                    </div>
                </div>
            </Link>
        </li>
    )
}

export default Card
