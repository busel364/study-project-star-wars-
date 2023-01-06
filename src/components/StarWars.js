import React from 'react'
import { defaultHero, friends, starWarsInfo } from '../utils/constants';
import style from '../css_modules/farGalaxy.module.css';
import { useParams } from 'react-router-dom'

const StarWars = () => {
  let { heroId } = useParams();
  if (!friends.includes(heroId)) {
    heroId = defaultHero;
  }
  return (
    <div className={style.farGalaxy}>
      <p>{starWarsInfo}</p>
    </div>
  )
}

export default StarWars