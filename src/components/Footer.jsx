import React from 'react'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { IonFooter, IonButton } from '@ionic/react'
import { LOGIN_USER } from '../state/actions/actionTypes'
import { onLogout } from '../modules/authentication'

const Footer = props => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authenticated)
  let label
  let button

  if (authenticated) {
    label = 'Logout'
    button = (
      <IonButton
        name='login'
        id='login'
        color="danger" 
        onClick={() => onLogout(dispatch)}
      >
       Logout
      </IonButton>
    )
  } else {
    label = 'Login'
    button = (
      <IonButton
        name='login'
        id='login'
        color="danger" 
        onClick={() => props.dispatch({ type: LOGIN_USER })}
      >
        Login
      </IonButton>
    )
  }

  return (
    <IonFooter className='ion-no-border' align="center">
      {button}
    </IonFooter>
  )
}

const mapStateToProps = state => {
  return {
    showLogin: state.showLogin
  }
}

export default connect(mapStateToProps)(Footer)
