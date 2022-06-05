import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItems from '../../components/checkout-item/checkout-item.component'
import {
  CheckoutContainer,
  Header,
  HeaderBlock,
  Total,
} from './checkout.styles'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

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
