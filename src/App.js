import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'

function App () {
  const { pathname }= useLocation()
  const  navigate  = useNavigate()
  const [characters, setCharacters]= useState([])
  const [access, setAccess]= useState(false)
  const username = "bautista.zitelli11@gmail.com"
  const password = "ejemplo123"



  function login(userData) {
    if (userData.username === username && userData.password === password) {
       setAccess(true);
       navigate('/home');
    }
 }

 function logout (){
  setAccess(false);
  navigate('/')
 }

 useEffect(() => {
  !access && navigate('/');
}, [access]);

  const onSearch= (character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });

  }

  const onClose =(id)=>{
    setCharacters(characters.filter(char=> char.id!== id))
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {pathname !=="/" && <Nav onSearch={onSearch} logout={logout} />}
      </div>
     <Routes>
      <Route path="/" element={<Form login={login}/>}/>
      <Route
         path="/home" 
         element={<Cards characters={characters} onClose={onClose}/>} 
         />
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:detailId' element={<Detail/>} />
     </Routes>
    </div>
  )
}

export default App
