import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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

const Card: React.FC<Props> = (props) => {
    const [moveCounter, setMoveCounter] = useState<number>(0)

    function getTypeColors() {
        switch (props.type) {
            case 'normal':
                return 'text-stone-600 bg-stone-200';
            case 'grass':
                return 'text-green-600 bg-green-200';
            case 'fire':
                return 'text-red-600 bg-red-200';
            case 'water':
                return 'text-blue-600 bg-blue-200';
            case 'bug':
                return 'text-orange-600 bg-orange-200';
            case 'electric':
                return 'text-yellow-600 bg-yellow-200';
            case 'poison':
                return 'text-emerald-600 bg-emerald-200';
            case 'ground':
                return 'text-amber-600 bg-amber-200';
            case 'fairy':
                return 'text-indigo-600 bg-indigo-200';
            case 'fighting':
                return 'text-purple-600 bg-purple-200';
            case 'rock':
                return 'text-yellow-900 bg-yellow-500';
            case 'ghost':
                return 'text-gray-600 bg-gray-200';
            case 'psychic':
                return 'text-teal-600 bg-teal-200';
            default:
                return 'default-class';
        }
    }

    const typeColors = getTypeColors();

    const handleIncrementCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (moveCounter < 5) {
            setMoveCounter(moveCounter + 1)
        }
    }

    return (
        <li>
            <Link href="/[id]" as={`/${props.id + 1}`}>
                <li className='shadow-xs hover:shadow-lg rounded bg-white p-6' key={props.id}>
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
                            <button onClick={handleIncrementCounter} className='border-blue-500 hover:bg-blue-500 border-2 text-blue-500 hover:text-white font-semibold py-2 px-4 rounded mt-8 w-full border-solid transition-all duration-100 ease'>Add movement</button>
                        </div>

                    </div>
                </li>
            </Link>
        </li>
    )
}

export default Card
