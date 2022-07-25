import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrwnLog } from '../../assets/crown.svg'
// import { signOutUser } from '../../utils/firebase/firebase.utils'
import {signOutStart} from '../../store/user/user.action.js'
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  // console.log(currentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  const dispatch = useDispatch()
  const signOutUser = () => dispatch(signOutStart())
  
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
