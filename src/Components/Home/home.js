import React from 'react'
import './home.css'
import Burger from '../../assets/s-img-1.jpg'
import Pizza from '../../assets/s-img-2.jpg'
import IceCream from '../../assets/s-img-3.jpg'
import Juice from '../../assets/s-img-4.jpg'

const Home = () => {
  return (
    <div>
           

    <header className='header'>
      <a href="#" className="logo">
        <i className='fas fa-shopping-basket'></i> Wow shop
      </a>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#speciality">Offer</a>
        <a href="#home">products</a>
        <a href="#home">Wishlist</a>
        <a href="#home">Cart</a>
        <a href="#home">Login</a>
      </nav>

      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <div className="fas fa-shopping-cart" id="cart-btn">
          <a href="#"></a>
        </div>
        <div className="fas fa-user" id="login-btn">
          <a href="#"></a>
        </div>
      </div>
    </header>

  

    <section className="home" id="home">
      <div className="content">
        <h3>Food made with <span>love</span></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          libero nostrum veniam facere tempore nisi.
        </p>
        <a href="#" className="btn">shop now</a>
      </div>
    </section>



    <section className="speciality" id="speciality">
      <h1 className="heading"><span>50% OFF ON</span></h1>

      <div className="box-container">
        

        <div className="card card-ecom card-horiz">
          <div className="card-img-cont">
            <img
              className="card-img"
              src={Burger}
              alt="burger"
            />
          </div>
          <div className="card-body">
            <div className="card-header">
              <h6 className="card-title">BURGER</h6>
              <p className="card-desc">Veg Cheese Burger</p>
              <div className="card-price">
                <span className="price-new" style={{fontSize: '1.25rem'}}>Rs.80</span>
                <span className="price-old" style={{fontSize: '1.25rem'}}>Rs.120</span>
                <span className="discount" style={{fontSize: '1.25rem'}}>(40%)</span>
              </div>
            </div>
            <div className="card-footer">
              <button className="button btn-primary card-button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        <div className="card card-ecom card-horiz">
          <div className="card-img-cont">
            <img
              className="card-img"
              src={Pizza}
              alt="pizza"
            />
          </div>
          <div className="card-body">
            <div className="card-header">
              <h6 className="card-title">PIZZA</h6>
              <p className="card-desc">Veg Cheese Pizza</p>
              <div className="card-price">
                <span className="price-new" style={{fontSize: '1.25rem'}}>Rs.80</span>
                <span className="price-old" style={{fontSize: '1.25rem'}}>Rs.120</span>
                <span className="discount" style={{fontSize: '1.25rem'}}>(40%)</span>
              </div>
            </div>
            <div className="card-footer">
              <button className="button btn-primary card-button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    

    <section className="products" id="products">
      <h1 className="heading" style={{marginTop: '8rem'}}>
        our <span>products</span>
      </h1>

      <div className="product-card">
        

        <div className="card card-ecom mg-1-all">
          <button className="btn secondary-text-btn-sm card-close">
            <i className="far fa-heart"></i>
          </button>
          <div className="card-img-cont">
            <img className="card-img" src={Burger} alt="veg-momos" />
          </div>
          <div className="card-badge">OFFER</div>
          <div className="card-body">
            <div className="card-header">
              <h6 className="card-title">BURGER</h6>
              <p className="card-desc">Veg Cheese Burger</p>
              <div className="card-price">
                <span className="price-new" style={{fontSize: '1.25rem'}}>Rs.56</span>
                <span className="price-old" style={{fontSize: '1.25rem'}}>Rs.80</span>
                <span className="discount" style={{fontSize: '1.25rem'}}>(30%)</span>
              </div>
            </div>
            <div className="card-footer">
              <button className="button btn-primary card-button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card card-ecom mg-1-all">
          <button className="btn secondary-text-btn-sm card-close">
            <i className="far fa-heart"></i>
          </button>
          <div className="card-img-cont">
            <img className="card-img" src={Pizza} alt="veg-momos" />
          </div>
          <div className="card-badge">OFFER</div>
          <div className="card-body">
            <div className="card-header">
              <h6 className="card-title">PIZZA</h6>
              <p className="card-desc">Veg Cheese Pizza</p>
              <div className="card-price">
                <span className="price-new" style={{fontSize: '1.25rem'}}>Rs.56</span>
                <span className="price-old" style={{fontSize: '1.25rem'}}>Rs.80</span>
                <span className="discount" style={{fontSize: '1.25rem'}}>(30%)</span>
              </div>
            </div>
            <div className="card-footer">
              <button className="button btn-primary card-button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card card-ecom mg-1-all">
          <button className="btn secondary-text-btn-sm card-close">
            <i className="far fa-heart"></i>
          </button>
          <div className="card-img-cont">
            <img className="card-img" src={IceCream} alt="veg-momos" />
          </div>
          <div className="card-badge">OFFER</div>
          <div className="card-body">
            <div className="card-header">
              <h6 className="card-title">ICE-CREAM</h6>
              <p className="card-desc">Cold Ice-Cream</p>
              <div className="card-price">
                <span className="price-new" style={{fontSize: '1.25rem'}}>Rs.56</span>
                <span className="price-old" style={{fontSize: '1.25rem'}}>Rs.80</span>
                <span className="discount" style={{fontSize: '1.25rem'}}>(30%)</span>
              </div>
            </div>
            <div className="card-footer">
              <button className="button btn-primary card-button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card card-ecom mg-1-all">
          <button className="btn secondary-text-btn-sm card-close">
            <i className="far fa-heart"></i>
          </button>
          <div className="card-img-cont">
            <img className="card-img" src={Juice} alt="veg-momos" />
          </div>
          <div className="card-badge">OFFER</div>
          <div className="card-body">
            <div className="card-header">
              <h6 className="card-title">JUICE</h6>
              <p className="card-desc">Fresh Juice</p>
              <div className="card-price">
                <span className="price-new" style={{fontSize: '1.25rem'}}>Rs.56</span>
                <span className="price-old" style={{fontSize: '1.25rem'}}>Rs.80</span>
                <span className="discount" style={{fontSize: '1.25rem'}}>(30%)</span>
              </div>
            </div>
            <div className="card-footer">
              <button className="button btn-primary card-button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      <a href="" className="btn product-btn"
        >View All Products</a>
    </section>

    
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <a href="https://twitter.com/MuskanChhatras1">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://github.com/MuskanChhatrasal">
            <i className="fab fa-github"></i> Github
          </a>
          <a href="https://www.linkedin.com/in/muskan-chhatrasal/">
            <i className="fab fa-linkedin"></i> linkedin
          </a>
        </div>
      </div>

      <div className="credit">by <span>Muskan</span> | all rights reserved</div>
    </section>



  
    {/* <script src="js/script.js"></script> */}
    </div>
  )
}

export default Home