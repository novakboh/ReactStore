import './Card.css'
import commentImage from './assets/comment.png'
import bagImage from './assets/bag.png'

type CardProps = {
  image: string;
  title: string;
  cashback: string;
  oldPrice: string;
  discount: string;
  price: string;
  rating: number;
  reviews: string;
}

function Card({ image, title, cashback, oldPrice, discount, price, rating, reviews }: CardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3>{title}</h3>

        <div className="rating">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= rating ? 'star active' : 'star'}>
                ★
              </span>
            ))}
          </div>

          <img className="review-icon" src={commentImage} alt="" />
          <span className="reviews">{reviews}</span>
        </div>

        <div className="cashback">
          <span>Кешбек</span>
          <span className="cashback-amount">{cashback}</span>
        </div>

        <div className="prices">
          <span className="old-price">{oldPrice}</span>
          <span className="discount">{discount}</span>
        </div>

        <div className="bottom">
          <span className="price">{price}</span>

          <div className="buy-button">
            <img src={bagImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card