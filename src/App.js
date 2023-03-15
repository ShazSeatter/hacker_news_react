import React, {useState, useEffect} from 'react';
import StoryList from './components/StoryList';
import Form from './components/Form';

import './App.css';

function App() {
  const [stories, setStories] = useState([]);


  const getStories = async () => {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    const data = await response.json()
    const newData = data.splice(0, 10)

    const promises = newData.map(async story => {
      const secondResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
      const singleStory = await secondResponse.json();
      return singleStory;
    })

    // gives an array of promises once they are all done and THEN you can do something with that DATA
    const results = await Promise.all(promises)
    setStories(results)
  }

  useEffect(() => {
    getStories();
  }, [])



  return (
    <div className="App">
      <h1>Articles</h1>
      <Form stories={stories}/>
      <StoryList stories={stories}/>
    </div>
  );
}

export default App;
