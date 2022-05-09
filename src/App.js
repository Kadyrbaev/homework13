import { useEffect, useState } from 'react';
import './App.css';
import UseAdd from './components/Rendering';

function App() {

  const [state, setState] = useState([])
  const [rendData, setRendData] = useState(false)

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/photos??_start=0&_limit=10')
  .then((res)=>res.json())
  .then((response)=>setState(response))
  console.log('rend');
  }, [rendData])

  function updateHandler(){
    setRendData((prev)=> !prev)
  }
   
 

  return (
    <div className="App">
      <button onClick={updateHandler}>Update</button>
      <div className='wrap'>
      {  console.log(state)}
      {rendData && state.map((el)=>{
        return (
          <UseAdd key={el.id} title={el.title} id={el.id} thumbnailUrl={el.thumbnailUrl} />
        )
      })}
      </div>
    </div>
  );
}

export default App;
