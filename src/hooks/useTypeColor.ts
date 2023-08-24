import { useMemo } from 'react';

const useTypeColors = (type: string) => {
    const typeColors = useMemo(() => {
        switch (type) {
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
    }, [type]);

    return typeColors;
};

export default useTypeColors;
