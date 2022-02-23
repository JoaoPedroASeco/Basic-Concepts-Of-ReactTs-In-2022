import { useState } from "react"
import { Tweet } from "./components/Tweet"
import './App.css'
import { AppRoutes } from "./Router"

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
  ])

  function createTweet () {
    setTweets([...tweets, 'tweet 5'])
  }

  return (
    <AppRoutes />
    // <div>
    //   {tweets.map(tweet => {
    //     return <Tweet text={tweet} />
    //   })}

    //   <button 
    //   onClick={createTweet}
    //   style={{background: '#8257e6'}}
    //   >Add</button>
    // </div>
  )
}

export default App
