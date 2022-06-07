import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { CartContext } from '../../contexts/cart.context'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrwnLog } from '../../assets/crown.svg'
// import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles'

const Navigation = () => {
  // const { currentUser } = useContext(UserContext)
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext)
  // console.log(currentUser)
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLog className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
