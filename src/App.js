import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [memes, setMemes] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [perPage,setPerPage] = useState(15);

  const fetchData = async () => {
    const response = await fetch(process.env.REACT_APP_API_KEY);
    const data = await response.json();
    setMemes(data.data.memes);
  };


  useEffect(() => {
    fetchData();
  }, []);
  console.log(memes);
  
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentMeme = memes.slice(indexOfFirstPost,indexOfLastPost);
  
  
  return (
    <div className="">
      <Header />
      <Results memes={currentMeme} />
    </div>
  );
}

export default App;
