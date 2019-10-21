import React from 'react';

import '../../styles/indexPage.css';

const Card =()=> {
  return (
    <>
      <div class="image-area">
        <div class="img-wrapper">
          <img src="images/vim.png" className="App-logo" alt="logo" />
          <h2>vim</h2>
          <ul>
            <li><a href="https://github.com/vinhtran-0912"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/vinhhhtrannn/?hl=vi"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100004416785306"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UC2BIFld-6RqYb6s3zEvVVQw?view_as=subscriber"><i class="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Card; 
