import { useContext } from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItems from '../cart-item/cart-items.component'
import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
