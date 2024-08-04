import css from  "./FriendList.module.css"
import FriendListItem from "../FriendListItem/FriendListItem"
import PropTypes from 'prop-types';



const Friendlist = ({ friends=[] }) => {
   
    
    return (
     
      <ul className = {css.friendList_ul}>
        {friends.map(friend => (
          <li className = {css.friendList_li} id={friend.id} key={friend.name}> {/* Используйте уникальный ключ для каждого элемента списка */}
            <FriendListItem 
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>

        ))}
      </ul>
     
    );
  }
  
  Friendlist.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id:PropTypes.number,
        name: PropTypes.string,
        avatar: PropTypes.string,
        isOnline: PropTypes.bool
      })
    )
};

  export default Friendlist;
