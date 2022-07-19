import { PropTypes } from 'prop-types';

export default function UserData({
  image, name, email, lastLogin,
}) {
  return (
    <>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{lastLogin}</h3>
    </>
  );
}

UserData.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};

UserData.defaultProps = {
  image: 'https://64.media.tumblr.com/23cff9c6b2e4d3da9a9dfc64cfcc9ac3/tumblr_pmn5abqGeM1riv22r_540.jpg',
  name: 'Big Buddy',
  email: 'furb_papa@aol.com',
  lastLogin: 'Always logged on',
};
