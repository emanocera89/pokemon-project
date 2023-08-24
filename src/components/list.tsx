import { Items } from '@/types'
import Card from './card'

interface Props {
    data: Items[]
}

const List: React.FC<Props> = (props) => {

    return (
        <div>
            <ul className='grid grid-cols-4 gap-6'>
                {props.data.map((pokemon, id) => (
                    <Card key={id} id={id} name={pokemon.name} image={pokemon.image} type={pokemon.type} moves={pokemon.moves} />
                ))}
            </ul>
        </div>
    )
}

export default List
