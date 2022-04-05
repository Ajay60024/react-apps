import React,{useState,useEffect} from 'react'
import './App.css';

function App() {
  const [data,setData]=useState()
  const [search,setSearch]=useState("mumbai")

  useEffect(()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5664d7684ed475b5c3d11fa454a6113a`
 fetch(url).then(resp=>resp.json())
 .then(resp=>setData(resp.main))
 console.log(setData);

  },[search])
  return (
    <>
    <div className="camt"></div>
    <div className="city">
      <h1 className='head'><span>weather </span> App</h1>
    <p className='para'> Enter the<span> City name . </span> </p>
     <input type="search" onChange={(event)=>{setSearch(event.target.value)} }placeholder="search city......." className='input'/>
     <h1>{search}</h1>
     </div>
     {
       !data ? (
         <div className="data">
         <p>City Not Found</p>
         </div>
       ) : (
         <div  className="temp">
          
        <p>Temp: {data.temp}°C</p>
        <p>Min-temp: {data.temp_min}°C</p>
        <p>Max-temp: {data.temp_max}°C</p>
        <footer className='footer'>
          <h6>Created by Sanjay Anthwal.Copyright © 2022</h6>
          </footer>
         </div>
       )
     }
    </>
  );
}

export default App;
