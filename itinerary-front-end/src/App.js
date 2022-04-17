
import './App.css';
import { useEffect, useState } from 'react';
import Tripscontainer from './tripsCont/tripscont';
import egg from'./easteregg-removebg-preview.png';
import plane from './plane-removebg-preview (1).png'
import message from'./secretMessage-removebg-preview.png'

function App() {
  const [showMessage, setShowMessage] = useState(false)
  const [foundOne, setEggsFoundOne] = useState(false)
  const [foundTwo, setEggsFoundTwo] = useState(false)
  const [foundThree, setEggsFoundThree] = useState(false)
  const [eggcount, seteggcount] = useState([])

  const toggleMessage = (eggNum)=>{
      if( eggNum === 'egg1'){
        setEggsFoundOne(true)
        console.log(foundOne)
      }else if( eggNum === 'egg2'){
        setEggsFoundTwo(true)
        console.log(foundTwo)
      } else{
        setEggsFoundThree(true)
        console.log(foundThree)
      }
      setEggsFoundOne(setEggsFoundOne)
      setEggsFoundTwo(setEggsFoundTwo)
      setEggsFoundThree(setEggsFoundThree)
      console.log(`${foundOne}${foundTwo}${foundThree}`)
      if(foundOne && foundTwo && foundThree){
        setShowMessage(true)
        console.log('you did it!')
      }
  }
    
    
console.log(foundOne && foundTwo && foundThree)
  return (
    <div>
      <header>
        <ul>
        {foundOne?
          <img src={egg} alt='' className='found'></img>
        :
          <img src={egg} alt='' className='hidden'></img>
        }
        {foundTwo?
          <img src={egg} alt='' className='found'></img>
        :
          <img src={egg} alt='' className='hidden'></img>
        }
        {foundThree?
          <img src={egg} alt='' className='found'></img>
        :
          <img src={egg} alt='' className='hidden'></img>
        }
          
        </ul>
        <div id='rightSide'>
          <img src={plane} alt='' id='plane'></img>
          <h1>One Stop Itinerary</h1>
        </div>
      </header>
      <div id='eggCont'>
          {foundOne?
              <img src={egg} alt='' id='egg1' className='found'></img>
            :
            <img src={egg} alt='' id='egg1' className='eggToFind' onClick={()=>{toggleMessage('egg1')}}></img>
            }
          {foundTwo?
              <img src={egg} alt='' id='egg2' className='found'></img>
            :
            <img src={egg} alt='' id='egg2' className='eggToFind' onClick={()=>{toggleMessage('egg2')}}></img>
            }
          {foundThree?
              <img src={egg} alt='' id='egg3' className='found'></img>
            :
            <img src={egg} alt='' id='egg3' className='eggToFind' onClick={()=>{toggleMessage('egg3')}}></img>
            }
          
      </div>
      <div id='secretCont'>
      {foundOne && foundTwo && foundThree?
        <div id='secret'>
          <img src={message}></img>
          <button id='closeMessage' onClick={()=>{setEggsFoundOne(false); setEggsFoundTwo(false); setEggsFoundThree(false)}}>X</button>
        </div>
        :
          <></>
        }
      </div>
      <Tripscontainer></Tripscontainer>
    </div>
  );
}

export default App;
