import React, { useState } from 'react';
import '../styles/Wishlist.css';

const Wishlist = () => {
  const [isWishlistClicked, setIsWishlistClicked] = useState(false);

  return (
    <div
      className={`wishlist ${isWishlistClicked ? 'wishlist-active' : ''}`}
      onClick={() => setIsWishlistClicked(!isWishlistClicked)}
    >
      ❤️
    </div>
  );
};

export default Wishlist;
