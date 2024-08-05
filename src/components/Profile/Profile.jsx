import css from  "./Profile.module.css";
// import PropTypes from 'prop-types';

// export const userData = {
//     username: "Jacques Gluke",
//     tag: "jgluke",
//     location: "Ocho Rios, Jamaica",
//     avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308
//     }
//   };


const Profile = ({username,tag,location,stats,avatar})=> {
    return (
    <div  className={css.profile}> 
    <div> 
        <img src={avatar} alt={`Avatar ${username}`}/> 
        <p className={css.username}>{username}</p> 
        <p className={css.tag}>{tag}</p> 
        <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats_value}> 
        <li> 
            <span>Followers</span> 
            <span >{stats.followers}</span> 
        </li> 
        <li> 
            <span>Views</span> 
            <span >{stats.views}</span> 
        </li> 
        <li> 
            <span>Likes</span> 
            <span>{stats.likes}</span> 
        </li> 
    </ul> 
</div>)
} 
// Profile.propTypes = {
//     name:PropTypes.string.isRequired,
//     tag:PropTypes.string.isRequired,
//     location:PropTypes.string.isRequired,
//     image:PropTypes.string.isRequired,
//     stats:PropTypes.any,
// };

export default Profile;
