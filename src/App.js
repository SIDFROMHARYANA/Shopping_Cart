import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function Play() {
  const [count, setCount] = useState(0);

  function handleGame() {
    setCount(count+1);
    alert('ALL THE BEST');

  }
  
  
  return (
    
    <button onClick={handleGame}>
      Played {count} times
    </button>

  );
}


 const jeev = {
  name: 'Life is indeed a GOD Game. And GOD has a plan for everybody. Trust it ! Live it ! enjoy it !',
  Details : ' Follow me ASHISH PUNIA on :' ,
  URL : 'https://www.youtube.com/channel/UClErrX9bs3Iri8VJnU_GITw',
  imageUrl: 'https://i.ytimg.com/vi/dT2spmHH88w/hqdefault.jpg?sqp=-oaymwE9CPYBEIoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4AdQGgALgA4oCDAgAEAEYZSBdKEEwDw==&rs=AOn4CLAo0XC30urkAB3ScTIX1iErFYvlrw',
  width: 300,
  height: 200
};

const playlists = [
  { title: 'Music', id: 1 },
  { title: 'Mythology', id: 2 },
  { title: 'Science', id: 3 },
]


const categories = playlists.map(playlist =>
  <li
    key={playlist.id}
    style={{
      color: playlist.isSpritual ? 'magenta' : 'indigo'
    }}
  >
    {playlist.title}
  </li>
);

    
    

export default function MyApp()
{
  return (
           <>
           <div>
           
            <h1> WELCOME TO GAME OF LIFE </h1>
            
            <h2> How many times you came in this virtual Game?</h2>
              
             <Play/>
             <Play/>
           
            </div>
           
            <h1>{jeev.name}</h1>
      <img
         className="kalki19"
        src={jeev.imageUrl}
         alt={'Photo of ' + jeev.name} // not mandatory..when image not loaded..it shows
        style={{
          width: jeev.width,
          height: jeev.height
        }}
       

        />
        <h2>{jeev.Details}</h2>
        <h2>{jeev.URL}</h2>
        <h3>Playlist :</h3>


    <ul>{categories}</ul>
  
           </>
  );
}

    

 {/* Conditionally Rendring

 let content;
  if (isLoggedIn) {   content = <AdminPanel />;
  } else {
//   content = <LoginForm />;
//  }
//  return (
//   <div>
//     {content}
//   </div>
// )
    */}
