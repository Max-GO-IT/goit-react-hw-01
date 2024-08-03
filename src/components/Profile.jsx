import "./Profile.css";
import PropTypes from 'prop-types';

export const userData = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308
    }
  };


const Profile = ({name,tag,location,stats})=> {
    return (
    <div> 
    <div> 
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="User avatar"/> 
        <p className="name">{name}</p> 
        <p className="tag">{tag}</p> 
        <p className="location">{location}</p>
    </div>
  
    <ul className="stats"> 
        <li> 
            <span>Followers</span> 
            <span className="stats-folowers">{stats.followers}</span> 
        </li> 
        <li> 
            <span>Views</span> 
            <span className="stats-views">{stats.views}</span> 
        </li> 
        <li> 
            <span>Likes</span> 
            <span className="stats-likes">{stats.likes}</span> 
        </li> 
    </ul> 
</div>)
} 
Profile.propTypes = {
    name:PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    stats:PropTypes.any,
};

export default Profile;
