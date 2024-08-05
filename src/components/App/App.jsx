//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.module.css';
import Profile from '../Profile/Profile';
// import { userData } from './Profile'
import userData  from '../../json/userData.json';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import value  from '../../json/value.json';
import friends  from '../../json/friends.json';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Profile 
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

    
    <FriendList friends={friends}/>
    <TransactionHistory items={value}/>


    </>
  )
}

export default App
