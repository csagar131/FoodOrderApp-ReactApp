import React, {useState} from 'react'
import classes from '../Layout/Header.module.css'
import mealsImg from '../../asset/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import Modal from '../UI/Modal'

const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {
    setShowCart(true)
  }

  const handleCloseCart = () => {
    setShowCart(false)
  }

  return (
    <React.Fragment>
        {
          showCart && <Modal closeCart={handleCloseCart} />
        }
        <header className={classes.header}>
            <h1>ReactMeals</h1> 
            <HeaderCartButton handleShowCart={handleShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img  src={mealsImg} alt="meals-img"/>
        </div>
    </React.Fragment>
  )
}

export default Header