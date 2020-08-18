import React from 'react'
import './list.css'

const List = props => {
    return (
        <ul>
            {   props.items.map(item => {
                    return (
                        <li key={item.id}>
                            <a href={`http://www.ensembl.org/id/${item.id}`} target="_blank">{item.id}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List;