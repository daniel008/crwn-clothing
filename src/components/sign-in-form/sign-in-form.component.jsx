import { useState } from 'react'
import {useDispatch} from 'react-redux'
// import {signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import {googleSignInStart, emailSignInStart} from '../../store//user/user.action'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { SignInContainer, ButtonContainer } from './sign-in-form.styles.jsx'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart())
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      // await signInAuthUserWithEmailAndPassword(email, password)
      // console.log(user)
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      console.log('user sign in failed', error);
      }
  }
  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm
