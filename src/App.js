import React from 'react';
import { useState } from 'react';
import './App.css';

const MovieDB = {
  SciFi: [
    { name: "Arrival", rating: "5/5" },
    { name: "2001:A Space Odyssey", rating: "5/5" },
    { name: "Inception", rating: "4/5" },
    { name: "Donnie Darko", rating: "4/5" },
    { name: "Back to the Future Triology", rating: "4/5" }

  ],

  Fantasy: [
    {
      name: "Lord of the Rings Trilogy",
      rating: "5/5"
    },
    {
      name: "Harry Potter Series",
      rating: "4.5/5"
    },
    {
      name: "Lal Kaptaan",
      rating: "4/5"
    },
    { name: "Hobbit Triology", rating: "3.75/5" }

  ],
  Crime: [
    {
      name: "The Godfather Trilogy",
      rating: "4.5/5"
    },
    {
      name: "Goodfellas",
      rating: "4.5/5"
    },
    {
      name: "Heat",
      rating: "4/5"
    },
    {
      name: "The Departed",
      rating: "4/5"
    }
  ],
  Thriller: [
    { name: "The Usual Suspects", rating: "4.5/5" },
    { name: "Andhadhun", rating: "4/5" },
    { name: "Drishyam", rating: "4/5" },
    { name: "Prisoners", rating: "4/5" },
    { name: "Memento", rating: "4/5" },
    { name: "The Sixth Sense", rating: "3.75/5" }
    


  ],

  SuperHero: [
    { name: "The Batman Trilogy", rating: "4.5/5" },
    { name: "Logan", rating: "4/5" },
    { name: "Avengers", rating: "3.75/5" },
    { name: "Mard ko Dard nahi Hota", rating: "3.5/5" },
    { name: "Wonder Woman", rating: "3.5/5" }


  ],
  BioPic: [
    { name: "Lincoln", rating: "5/5" },
    { name: "Downfall", rating: "5/5" },
    { name: "The King's Speech", rating: "4/5" },
    { name: "The Irishman", rating: "4/5" },
    { name: "The Big Short", rating: "4/5" },
    { name: "Darkest Hour", rating: "3.75/5" },
    { name: "Pele :Birth of a Legend", rating: "3.75/5" },
   
    { name: "Imitation Game", rating: "3.5/5" }


  ]

};



function App() {
const [Selectedgenre,Setgenre] = useState("SciFi");
function genreClickHandler(genre){
  Setgenre(genre);
}


  return (
    <div className="App">
      <h1 style={{color:"rgb(1, 31, 31)",padding:"0.5rem",backgroundColor:"lightcyan"}}>🎥 Goodfilms : Movies i can drag you to watch</h1>
      
      <small id="line-small">Click on the Genre of your choice</small>
      
      <div>
        {Object.keys(MovieDB).map((genre)=> (<button key={genre}
        onClick={()=>genreClickHandler(genre)} 
        style={{
          borderRadius:"0.5rem",
          cursor:"pointer",
          padding:"0.5rem 1rem",
          margin:"1rem 0.5rem",
          backgroundColor:"rgb(9, 53, 53)",
          color:"white",
          borderColor:"white",

        }} >{genre}</button>  ) )}

      </div>

      <hr />
      <div >
        <ul>
          {MovieDB[Selectedgenre].map((mkv)=>(
            <li  key={mkv.name} 
            id="movies-list"
            >
              <div   style={{fontSize:"larger",color:"black",backgroundColor:"lightcyan"}}>{mkv.name}</div>
              <div style={{color:"rgb(9, 53, 53)",backgroundColor:"lightcyan"}}><small   >{mkv.rating}</small></div>
            </li>
          ))}



        </ul>


      </div>
     
    </div>
  );
}

export default App;
