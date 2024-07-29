import FriendListItem from "./FriendListItem"
import PropTypes from 'prop-types';



const Friendlist = ({ friends=[] }) => {
   
    
    return (
      <ul>
        {friends.map(friend => (
          <li id={friend.id} key={friend.name}> {/* Используйте уникальный ключ для каждого элемента списка */}
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
