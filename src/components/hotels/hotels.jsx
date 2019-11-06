import React from 'react';

import Card from './components/card/card';

class Hotel extends PureComponent {
  constructor (props) {
    super();
  }

  render() {
    return <body className="hotels">
        <header>
          <nav className="main-navigation">
              <ul className="nav-list">
                <li className="nav-point"><a href="index.html">INFO</a></li>
                <li className="nav-point"><a href="gallery.html">GALLERY</a></li>
                <li><img src="img/logo3.png" width="120px" /></li>
                <li className="nav-point"><a href="map.html">MAP</a></li>
                <li className="menu-active">HOTELS</li>
              </ul>
          </nav>
        </header>
    
        <section className="filters">
          <div className="services">
            <label className="filters-title">SERVICES:</label><br /><br />
            <div className="filter-point">
              <label className="filter-label">
                <input className="checkbox" name="pool" type="checkbox" />
                <span className="checkmark"></span>
                Sweaming pool
              </label>
            </div>
    
            <div className="filter-point">
              <label className="filter-label">
                <input className="checkbox" value="Parking" type="checkbox" />
                <span className="checkmark"></span>
                Parking
              </label>
            </div>
            
            <div className="filter-point">
              <label className="filter-label">
                <input className="checkbox" value="Wifi" type="checkbox" />
                <span className="checkmark"></span>
                Wifi
              </label>
            </div>
          </div>
    
          <div className="type">
            <label className="filters-title">TYPE OF ACCOMODATION:</label><br /><br />
    
            <div className="filter-point">
              <label className="filter-label">
                <input className="checkbox" value="Hotel" type="checkbox" checked />
                <span className="checkmark"></span>
                Hotel
              </label>
            </div>
    
            <div className="filter-point">
              <label className="filter-label">
                <input className="checkbox" value="Apartments" type="checkbox" />
                <span className="checkmark"></span>
                Apartments
              </label>
            </div>
    
            <div className="filter-point">
              <label className="filter-label">
                <input className="checkbox" value="Houses" type="checkbox" />
                <span className="checkmark"></span>
                Houses
              </label>
            </div>
          </div>
          <div className="price">
            <label className="filters-title">PRICE PER DAY:</label><br /><br />
            <div className="filter-slider-label-wrapper">
              <div className="filter-slider-label-left">0 Kč</div>
              <div className="filter-slider-label-right">15000 Kč</div>
            </div>
    
            <div className="slider">
              <input id="tstatRange" type="range" style="width: 220px; height: 30px" min="0" max="1000" step = "0.1" list="increments" />
            </div>
    
            <div className="search-btn-wrapper">
              <button className="search-btn">
                <span className="search-btn-text">SHOW</span>
              </button>
            </div>
          </div>
        </section>
    
        <section className="result-header">
          <div className="result-title">FOUND: 15</div>
          <div className="sorting">
            <div className="sorting-header">SORTING:</div>
            <div><a className="sorting-type active" href="">BY PRICE</a></div>
            <div><a className="sorting-type" href="">BY TYPE</a></div>
            <div><a className="sorting-type" href="">BY RATING</a></div>
          </div>
          <div className="sorting-direction">
            <div className="sorting-direction-up"><i className="fa fa-caret-up"></i></div>
            <div className="sorting-direction-down"><i className="fa fa-caret-down"></i></div>
          </div>
        </section>
    
        <hr />
        {<Card />}
    
    
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
      </body>;
  }
};

export default Hotel;