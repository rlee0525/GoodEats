import React from 'react';

import Search from '../search';

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <img
          id="logo"
          src="http://res.cloudinary.com/rlee0525/image/upload/v1509507417/logo_iv3h6z.png"
        />
        <div className="instructions">Only the best restaurants near you</div>
        <Search />
      </div>
    );
  }
}

export default Home;