import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
  const context = useContext(CartContext)

  const totalAmount = context.totalAmount.toFixed(2)
  const hasItems = context.items.length > 0

  const cartItemRemoveHanlder = id => {}

  const cartItemAddHandler = item => {}

  return (
    <React.Fragment>
        <ul className={classes['cart-items']}>
            {
                context.items.map(item => {
                    return <CartItem key={item.id} onRemove={cartItemRemoveHanlder} onAdd={cartItemAddHandler} name={item.name} amount={item.qty} price={item.price}/>
                })
            }
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
            {hasItems && <button>Order</button>}
            <button onClick={() => props.closeCart()}>Cancel</button>
        </div>
    </React.Fragment>
  )
}

export default Cart