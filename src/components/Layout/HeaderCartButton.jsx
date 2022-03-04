import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {

  const [btnClasses, setBtnClasses] = useState('')

  const context =  useContext(CartContext)
  const numberOfCartItems = context.items.reduce((currNummber, item) => {
    return currNummber + item.qty
  }, 0)

  useEffect(() => {

    setBtnClasses(`${classes.button} ${classes.bump}` )

    let id = setTimeout(() => {
       setBtnClasses(`${classes.button}`)
    },300)

    return () => {
      clearTimeout(id)
    }

  }, [context.items,context.totalAmount])
  

  return (
    <button className={btnClasses} onClick={() => props.handleShowCart()}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton