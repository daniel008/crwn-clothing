import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-items.component'
import Button from '../button/button.component'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles'
// import { CategoriesContext } from '../../contexts/categories.context'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)

  // const { categoriesMap } = useContext(CategoriesContext)
  // console.log(categoriesMap)

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
