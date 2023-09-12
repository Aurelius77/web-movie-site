import React from 'react';
import IMDB from './assets/imdb.svg';
import rt from './assets/tomato.svg';
import { Link } from 'react-router-dom';

function Body({ data }) {
  const topTenMovies = data.slice(0, 10);
  
  return (
    <>
      <div className="header flex flex-col md:flex-row items-center justify-between">
        <h1 className='text-4xl mt-5 md:mt-10 md:ml-5'>Featured Movies</h1>
        <h1 className='text-red-500 text-xl mt-5 md:mt-10 md:mr-5'>See more</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5 md:mt-10">
        {topTenMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="bg-white rounded-lg shadow-md" key={movie.id} data-testid ='movie-card'>
              <img
                className="object-cover h-64 w-full rounded-t-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                data-testid ='movie-poster'
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold" data-testid ='movie-title'>{movie.title}</h2>
                <p className="text-gray-500" data-testid ='movie-release-date'>{movie.release_date}</p>
                <div className="ratings flex mt-2">
                  <img src={IMDB} alt="IMDB" className="mr-2"></img>
                  <p className="mr-5">{movie.vote_average}/10</p>
                  <img src={rt} alt="Rotten Tomatoes" className="mr-2"></img>
                  <p className="mr-2">8.8</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
