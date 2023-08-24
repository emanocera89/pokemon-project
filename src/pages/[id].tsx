import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { getItem } from '@/services';

interface Pokemon {
    name: string;
    types: { type: { name: string } }[];
    height: number;
    weight: number;
    moves: { move: { name: string } }[];
    sprites: { other: { home: { front_default: string } } }
}

function PokemonDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState<Pokemon | null>(null);

    useEffect(() => {
        if (id) {
            getItem({ id: id as string }).then((response) => {
                setData(response);
                console.log(response);
            });
        }
    }, [id]);

    return (
        <div className='flex min-h-screen flex-col items-center px-56 py-24'>
            {data ? (
                <div className='w-full flex shadow-xs rounded bg-white p-6'>
                    <div className='w-2/4'>
                        <Image
                            src={data.sprites.other.home.front_default}
                            width={500}
                            height={500}
                            alt={data.name}
                        />
                    </div>
                    <div className='w-2/4 pl-6'>
                        <h3 className='text-5xl font-bold capitalize'>{data.name}</h3>

                        <span className={`my-3 inline-block text-lg font-semibold py-1 px-2 uppercase rounded uppercase text-stone-600 bg-stone-200`}>{data.types[0].type.name}</span>




                        <div className="relative overflow-x-auto">
                            <table className="w-full text-lg text-left text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Height
                                        </th>
                                        <td className="px-0 py-4 text-right">
                                            {data.height}
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Weight
                                        </th>
                                        <td className="px-0 py-4 text-right">
                                            {data.weight}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>



                            <table className="w-full text-md text-left text-gray-500 dark:text-gray-400 my-4">
                                <thead className="text-xs text-gray-700 uppercase bg-stone-200 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-3 py-3">
                                            Moves
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.moves.slice(0, 5).map((move, index) => (
                                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td scope="row" className="px-0 py-3 text-gray-900 whitespace-nowrap dark:text-white">
                                                {move.move.name}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            ) : (
                <p>Loading...</p> // Cambia "Loading..." por un párrafo para mantener consistencia
            )}
        </div>
    );
}

export default PokemonDetail;