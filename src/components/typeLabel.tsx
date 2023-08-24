import React, { ReactNode } from 'react'
import useTypeColors from '@/hooks/useTypeColor'

interface Props {
    children: ReactNode
    type: string
    className: string
}

const TypeLabel: React.FC<Props> = (props) => {
    const typeColors = useTypeColors(props.type || '')
    return (
        props.type &&
        <span
            className={`${props.className} inline-block font-semibold py-1 px-2 uppercase rounded uppercase ${typeColors}`}
        >
            {props.children}
        </span>
    )
}

export default TypeLabel