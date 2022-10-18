import './App.css';
import React, { useEffect, useState } from 'react';
import Main from './components/Main.js';
import { initializeCategoriesFromServer, initializeItemsFromServer } from 'redux/ListsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()


  function getServerItemsData() {
    axios.get("http://localhost:8080/items/getAllItems")
      .then(response => {
        dispatch(initializeItemsFromServer(response.data))
      })
      .catch(err => { console.log(err) });
  }

  function getCategoriesData() {
    axios.get("http://localhost:8080/categories/getAllCategories")
      .then(response => {
        dispatch(initializeCategoriesFromServer(response.data))
        setLoading(false)
      })
      .catch(err => { console.log(err) });
  }

  function getDataFromServer() {
    getServerItemsData();
    getCategoriesData();
  }

  useEffect(() => {
    getDataFromServer();
  }, [])

  return (

    <div>
      {loading ? <CircularProgress /> : <Main />}
    </div>

  )
}

export default App;
