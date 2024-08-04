import css from "./FriendListItem.module.css";
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div>
        <img  src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className ={isOnline ? css.online : css.offline }>{isOnline ? "Online" : "Offline"}</p>
      </div>
    );
  }

  FriendListItem.propTypes = {
   avatar:PropTypes.string.isRequired,
   name:PropTypes.string.isRequired,
   isOnline:PropTypes.bool.isRequired
  }

export default FriendListItem;