import React from 'react';

function Header() {
  return (
    <header className="app-header">
      <h1>WelCome to GifSearch</h1>
      <h2>Search for your favorite GIFs</h2>
      <p>Click a GIF to open it on Giphy, or use the button to copy its URL</p>
    </header>
  );
}

export default React.memo(Header);
