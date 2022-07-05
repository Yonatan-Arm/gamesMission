import React from 'react'

export default function Preview({movie}) {
  return (
    <section className='card flex-col align-center justify-center'>
        <div className='info flex-col'>
        <span>name:  {movie.title} </span>
        <span> id: {movie.id}</span>
        <span>platform :{movie.platform}</span>
        <a href={movie.game_url} target="_blank"> go To Game</a>
        </div>
        <img src={movie.thumbnail} alt="movie-pic" />
    </section>
  )
}

