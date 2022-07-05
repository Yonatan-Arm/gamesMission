
const axios = require('axios')
const STORAGE_KEY="movies_db"
export const movieService= {
    loadMovies,

}
  
const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': '0b2f281ac1msh132fb1220e1ff40p1e3abcjsn9ca99561f4c5'
    }
  };
  
async function loadMovies(){
    const movies= loadFromStorage(STORAGE_KEY)
    if(movies) {
        return movies.slice(0,50)
    }
    else{
    const res =  await axios.request(options)
 try{
    saveToStorage(STORAGE_KEY,res.data)
        return res.data
    }
    catch (err){
        console.error(err);
    };
}
}

function loadFromStorage(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}

function saveToStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}


