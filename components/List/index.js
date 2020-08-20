import React from 'react'
import {Link} from 'react-router-dom'
import './list.css'

const List = props => {
    return (
        <ul className="itemList">
            {   props.items.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={`/list/${item.id}/${props.position}/${props.aminoAcid}`}>{item.id}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List;