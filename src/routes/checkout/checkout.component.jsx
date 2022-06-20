import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import CheckoutItems from '../../components/checkout-item/checkout-item.component'
import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  Total,
} from './checkout.styles'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItems key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout
