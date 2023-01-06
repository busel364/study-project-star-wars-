import React from 'react'
import style from '../css_modules/borderRound.module.css';
import { characters, navItems} from '../utils/constants';
import { Link } from 'react-router-dom';

const Friend = ({ friend, number}) => {
    let friendStyle = 'col-4 p-1 ';

    if (number === 7) {
        friendStyle += style.bottomLeft;
    }
    if (number === 9) {
        friendStyle += style.bottomRight;
    }

    return (
        <Link className='col-4 m-0 p-0 row' to={`../${navItems[0].route}/${friend}`}>
            <img className={`col-12 ${friendStyle}`} src={characters[friend].img} alt={characters[friend].name} />
        </Link>
    )
}

export default Friend

// onClick={() => { changeHero(friend) }}