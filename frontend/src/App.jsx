import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';



function App() 

{
    const [jokes, setJokes] = useState([]);

  

  

  function handClick()
  {

    axios.get('/api/jokes')
    .then((response) => {
        // Handle success
        setJokes(response.data);  
    })
    .catch((error) => {
        // Handle error
        console.log('Error fetching jokes:', error);
    })
    .finally(() => {
        
    });


  }
        
  function removeJokes() {

    setJokes=setJokes([]);
  }


  


    return (
        <div>
       
            <h1 className=' text-3xl antialiased text-center'>Front End page Jokes Display using API in Web-browser</h1>
            <button onClick={handClick} className='text-center block my-px  bg-blue-500 text-white border-2 border-black py-2 px-4 rounded hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50'>view jokes</button>
            <button onClick={removeJokes}className='text-center block my-px bg-red-500 text-white border-2 border-black py-2 px-4 rounded hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50'>Remove jokes</button>
            <p className='mx-auto text-center block text-emerald-600 text-3xl my-2.5'>JOKES: {jokes.length}</p>
            {jokes.map((joke) => (
                <div key={joke.id} className=' text-center py-3 px-6  bg-orange-300 mx-6 my-6 rounded-2xl'>
                    <h3>{joke.title}</h3>
                    <p>{joke.content}</p>
                 
                </div>
            ))}
        </div>
    );
}

export default App;