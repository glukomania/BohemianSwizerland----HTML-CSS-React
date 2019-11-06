import React from 'react';

const setMenuAddress = () => {
  return `/hotels`;
};

const MainScreen = (props) => {
  const {onLinkClick} = props;
  return <div>
  <header>
    <nav className="main-navigation">
      <div className="navigation-wrapper">
        <div className="container">
          <ul className="nav-list">
            <li className="menu-active">INFO</li>
            <li className="nav-point"><a href="gallery.html">GALLERY</a></li>
            <li><img src="../img/logo3.png" width="120px" /></li>
            <li className="nav-point"><a href="map.html">MAP</a></li>
            <li className="nav-point"><a href={setMenuAddress()} onClick={onLinkClick}>HOTELS</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <section className="intro">
    <div className="intro-wrapper">
      <div className="text-welcome">
        welcome
      </div>
      <div className="text-to">
        &dash;&dash;&dash; to the national park &dash;&dash;&dash;
      </div>
      <div className="text-title">BOHEMIAN SWITZERLAND</div>
      <div className="text-quote">"An amazing region, full of secrets"</div>
    </div>
    <img src="../img/line.png" width="100%" height="35px" />

    <div className="text">
      This national park was founded in 2000 to preserve the domain of a unique combination of majestic rock
      villages and sandstone formations with the incredible nature.
    </div>
  </section>

  <section className="categories">
    <div className="image-line">
      <img src="../img/img-line.png" width="100%" height="200px" />
    </div>
    <div className="categories-line">
        <div className="accomodation category">
          <img className="category-icon" src="../img/icon-accomodation.svg" />
          <h2 className="category-title">ACCOMODATION</h2>
          <p className="category-text">We recommend you to stay for at least one night!</p>
        </div>
        <div className="food category">
            <img className="category-icon" src="../img/icon-food.svg" />
            <h2 className="category-title">FOOD</h2>
            <p className="category-text">Local food will definetely surprise you!</p>
        </div>
        <div className="suvenirs category">
            <img className="category-icon" src="../img/icon-suvenirs.svg" />
            <h2 className="category-title">SUVENIRS</h2>
            <p className="category-text">Don't forget to buy some local pretty suvenirs!</p>
        </div>
    </div>
    <div className="image-line-second">
      <img src="../img/img-line-second.png" width="100%" height="270px" />
    </div>
  </section>

  <section className="benefits">
    <div className="benefit">
        <h2 className="category-title">MANY ROUTES</h2>
        <p className="category-text">- 1 - </p>
        <p className="category-text">There are plenty of routes with varouse difficulty: from bike routes to hard hiking pathes.</p>
    </div>
    <div className="benefit">
        <h2 className="category-title">BEAUTIFUL LANDSCAPES</h2>
        <p className="category-text">- 2 - </p>
        <p className="category-text">You can admire the beauty of nature from numerouse viewpoints</p>
    </div>
    <div className="benefit">
        <h2 className="category-title">NOT FAR FROM PRAGUE</h2>
        <p className="category-text">- 3 - </p>
        <p className="category-text">Get rest of cities: only an hour by train from Prague - and you are in the center of nature.</p>
    </div>
  </section>

  <section className="map-wrapper">
    <div className="interested">
      <h1 className="interested-title">ARE YOU INTERESTED?</h1>
      <p className="interested-text">Indicate the dates you want to come and we will show you a number of possible accomodation.</p>
      <div className="search-title">
          SEARCH OF ACCOMODATION
      </div>
    </div>

    <div className="map-boared">
      <div className="search-board">
        <form className="search-form">
          <div className="search-line">
              <label className="search-label" id="search-date-in">Date in:</label>
              <input className="search-input" type="text" htmlFor="search-date-in" placeholder="14 Oct" />
          </div>
          
          <div className="search-line">
              <label className="search-label" id="search-date-out">Date out:</label>
              <input className="search-input" type="text" htmlFor="search-date-out" placeholder="24 Oct" />
          </div>

          <div className="search-line">
            <div className="search-adults">
              <label className="search-label adults" id="search-adults">Adults:</label>
              <div className="number-module">
                  <button className="search-minus-btn number-btn">-</button>
                  <input className="number" type="text" htmlFor="search-adults" />
                  <button className="search-plus-btn number-btn">+</button>
              </div>
            </div>

            <div className="search-kids">
              <label className="search-label kids" id="search-children">Kids:</label>
              <div className="number-module">
                  <button className="search-minus-btn number-btn">-</button>
                  <input className="number" type="text" htmlFor="search-adults" />
                  <button className="search-plus-btn number-btn">+</button>
              </div>
            </div>
          </div>

          <div className="search-btn">
            <button className="search-submit-btn">SEARCH</button>
          </div>
          
        </form>
      </div>
    </div>
  </section>

  <footer className="footer-container">
    <div className="tag">#ceskesvycarsko</div>
    <div className="social">
          <i className="fa fa-2x fa-instagram"></i>
          <i className="fa fa-2x fa-youtube"></i>
    </div>
    <div className="my-logo">
        © Feel design.
    </div>
  </footer>
</div>
};

export default MainScreen;