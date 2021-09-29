import React from 'react';
import { useState } from 'react';
import './App.css';

const MovieDB = {
  SciFi: [
    { name: "Arrival", rating: "5/5",desc:"I love it for visuals.I consider it to be 2001 Space Odyssey of our generation." },
    { name: "2001:A Space Odyssey", rating: "5/5",desc:"Need no describing .A movie which is still celebrated and my current favourite." },
    { name: "Inception", rating: "4/5",desc:"A Nolan Masterpiece about Dream Layers.Exceptional Visuals and Acting ." },
    { name: "Donnie Darko", rating: "4/5",desc:"A SciFi Thriller MindFuck movie . You won't understand it once." },
    { name: "Back to the Future Triology", rating: "4/5",desc: "Most fun SciFI movie ever.The no of alternate timelines inspiration given by this movie is unimaginable."}

  ],

  Fantasy: [
    {
      name: "Lord of the Rings Trilogy",
      rating: "5/5",desc:"A Masterpiece Fantasy story telling. Cinematography , Acting direction peak."
    },
    {
      name: "Harry Potter Series",
      rating: "4.5/5",desc:"We grew with Harry growing and loathed Voldemort.Need i say more to intice you in watching this gem series."
    },
    {
      name: "Lal Kaptaan",
      rating: "4/5",desc:"A Brilliant movie underrrated gem based on History and Fantasy very unlike Bollywood."
    },
    { name: "Hobbit Triology", rating: "3.75/5",desc:"A prequel to Lord of rings Trilogy.Though not as brilliant but stands on apart." }

  ],
  Crime: [
    {
      name: "The Godfather Trilogy",
      rating: "4.5/5",desc:"The legendary duo of Al Pacino and Robert Di Neiro in epic story of GangSters of NewYork based on true inspirations."
    },
    {
      name: "Goodfellas",
      rating: "4.5/5",desc:"This is widely considered to be best gangster movie ever. Can't argue against this."
    },
    {
      name: "Heat",
      rating: "4/5",desc:"AWatch it for Acting lessons. Al Pacino and Robert De Neiro in ultimate best in this crime thriller."
    },
    {
      name: "The Departed",
      rating: "4/5",desc:"Modern masterpiece with Jack Nicolson and based lesser known Irish Mobs."
    }
  ],
  Thriller: [
    { name: "The Usual Suspects", rating: "4.5/5",desc:"Ending will blow you apart." },
    { name: "Andhadhun", rating: "4/5",desc:"AA wonderful performance by Tabbu and Ayushmann with gripping story." },
    { name: "Drishyam", rating: "4/5",desc:"A world class cinema experience easily in best movie made in Indian Cinema ever." },
    { name: "Prisoners", rating: "4/5",desc:"Visuals,Cinematography and Acting are impeccable.Best movie of Jake Gryllenhal in my views." },
    { name: "Memento", rating: "4/5",desc:"A nolan Masterpiece. Movie making at peak." },
    { name: "The Sixth Sense", rating: "3.75/5",desc:"A classic keeping your guessing and boom a twist thriller." }
    


  ],

  SuperHero: [
    { name: "The Batman Trilogy", rating: "4.5/5" ,desc:"This heralded the true era of superhero masterpiece movies.Must must watch. "},
    { name: "Logan", rating: "4/5",desc:"Best superhero movie of decade.Reinvented the genre after Dark Knight." },
    { name: "Avengers", rating: "3.75/5",desc:"A spectacle saga of decade . A storytelling and planning of Kevin Feige making Marvel immortal. " },
    { name: "Mard ko Dard nahi Hota", rating: "3.5/5",desc:"very underrated bollywood superhero movie . Highly Enjoyable." },
    { name: "Wonder Woman", rating: "3.5/5",desc:"DC reincarnation." }


  ],
  BioPic: [
    { name: "Lincoln", rating: "5/5",desc:"The man The Myth The Legend Daniel Day Lewis . What a movie and what a story." },
    { name: "Downfall", rating: "5/5" ,desc:"Again a brilliant movie on true events in German. True flagbearer of world class german cinema."},
    { name: "The King's Speech", rating: "4/5",desc:"Oscar winning Performance enhanced by pitch perfect feel good struggle story." },
    { name: "The Irishman", rating: "4/5" ,desc:"GangSter Biopic MasterPiece by Scorcese.It's an experience."},
    { name: "The Big Short", rating: "4/5" ,desc:"A true story enhanced by exceptional acting and accurate storytelling on 2008 financial crisis."},
    { name: "Darkest Hour", rating: "3.75/5" ,desc:"Edge of seat historical thriller."},
    { name: "Pele :Birth of a Legend", rating: "3.75/5",desc:"Literally made me cry. A must watch." },
   
    { name: "Imitation Game", rating: "3.5/5",desc:"The man behind computer Alan Turing's Biopic." }


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
              <div style={{color:"rgb(9, 53, 53)",backgroundColor:"lightcyan"}}><small   >{mkv.desc}</small></div>
            </li>
          ))}



        </ul>


      </div>

      <footer>
      <p> © | 2021 | aashirwad01</p>
      <ul className="footer-list">
        <li>
          <a className="links" href="https://github.com/aashirwad01" >
          <img className="img-2" src="https://img.icons8.com/material-two-tone/24/000000/github.png" alt="github"/>
          </a>
        </li>
        
        <li>
          <a className="links" href="https://twitter.com/aashirwad_01" >
          <img className="img-2" src="https://img.icons8.com/material-sharp/24/000000/twitter.png" alt="twitter"/>
          </a>
        </li>
        <li>
          <a
            className="links"
            href="https://www.linkedin.com/in/aashirwadkumar159/"
            
          >
            <img className="img-2" src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/>
          </a>
        </li>
      </ul>
    </footer>
     
    </div>
  );
}

export default App;
