import React from 'react'
import { onLogin, onLogout } from '../modules/authentication'
import { useDispatch, useSelector } from 'react-redux'
import { IonContent, IonButton, IonInput, IonCard } from '@ionic/react'

const Login = props => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authenticated)
  // const message = useSelector(state => state.message)

  let login
  if (authenticated) {
    login = <IonButton color="danger" onClick={() => onLogout(dispatch)}>Logout</IonButton>
  } else {
    login = (
      <IonContent>
        <IonCard>
        <form id='login-form' onSubmit={event => onLogin(event, dispatch)}>
          <IonInput id='email' name='email' placeholder='Email' />
          <IonInput
            id='password'
            name='password'
            type='password'
            placeholder='Password'
          />
          <IonButton id='login-button' color="danger" type='submit' value='Login'>Submit</IonButton>
        </form>
        </IonCard>
        <IonButton onClick={() => dispatch({ type: 'CLOSE_LOGIN' })}>
          Close
        </IonButton>
      </IonContent>
    )
  }
  return <>{login}</>
}

export default Login