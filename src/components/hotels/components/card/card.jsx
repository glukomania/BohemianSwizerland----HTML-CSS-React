import React from 'react';

class Card extends PureComponent {
  constructor (props) {
    super();
  }

  render() {
    return <section className="result">
      <div className="hotel">
        <div className="hotel-picture">
          <img src="img/hotel1.png" />
        </div>

        <div className="hotel-info">
          <div className="hotel-title">
            STEIGER SEBNITZER HOF
          </div>
          <div className="hotel-type-price">
            <div className="hote-type">HOTEL</div>
            <div className="hotel-price">FROM 900 Kč</div>
          </div>
          <div className="hotel-buttons">
            <button className="btn btn-more">MORE DETAILS</button>
            <button className="btn btn-book">BOOK</button>
          </div>
        </div>

        <div className="hotel-rates">
          <div className="hotel-stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="hotel-rating">
            <div className="hotel-rating-plaque">RATE: 8.5</div>
          </div>
        </div>
      </div>

      <hr />

      <div className="hotel">
        <div className="hotel-picture">
          <img src="img/hotel2.png" />
        </div>

        <div className="hotel-info">
          <div className="hotel-title">
            HOTEL AUGUSTUSBERG
          </div>
          <div className="hotel-type-price">
            <div className="hote-type">HOTEL</div>
            <div className="hotel-price">FROM 1100 Kč</div>
          </div>
          <div className="hotel-buttons">
            <button className="btn btn-more">MORE DETAILS</button>
            <button className="btn btn-book">BOOK</button>
          </div>
        </div>

        <div className="hotel-rates">
          <div className="hotel-stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="hotel-rating">
            <div className="hotel-rating-plaque">RATE: 5.5</div>
          </div>
        </div>
      </div>

      <hr />

      <div className="hotel">
        <div className="hotel-picture">
          <img src="img/hotel3.png" />
        </div>

        <div className="hotel-info">
          <div className="hotel-title">
            VILLA ELSE
          </div>
          <div className="hotel-type-price">
            <div className="hote-type">APARTMENTS</div>
            <div className="hotel-price">FROM 980 Kč</div>
          </div>
          <div className="hotel-buttons">
            <button className="btn btn-more">MORE DETAILS</button>
            <button className="btn btn-book">BOOK</button>
          </div>
        </div>

        <div className="hotel-rates">
          <div className="hotel-stars">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="hotel-rating">
            <div className="hotel-rating-plaque">RATE: 9.5</div>
          </div>
        </div>
      </div>
    </section>;
  }
};

export default Card;