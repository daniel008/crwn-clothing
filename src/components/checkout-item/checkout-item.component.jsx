import { useSelector, useDispatch } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.action'
import {
  CheckoutItemContainer,
  ImageConntainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles'

const CheckoutItems = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem))

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem))

  return (
    <CheckoutItemContainer>
      <ImageConntainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageConntainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={addItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={removeItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItems
