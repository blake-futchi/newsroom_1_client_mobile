import React from 'react'
import { IonSegment, IonSegmentButton } from '@ionic/react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { CATEGORY_SELECTION } from '../state/actions/actionTypes'

const Menu = props => {
  const handleItemClick = event => {
    props.dispatch({
      type: CATEGORY_SELECTION,
      payload: {
        categoryName: event.target.id
      }
    })
  }
  return (
    <IonSegment id='article-category' color="light" scrollable>
      <IonSegmentButton
        name='All News'
        id=''
        as={Link}
        to={{ pathname: '/' }}
        onClick={handleItemClick}
      >
        All
      </IonSegmentButton>
      <IonSegmentButton
        name='Latest News'
        id='latest_news'
        as={Link}
        to={{ pathname: '/latest_news' }}
        onClick={handleItemClick}
      >
        Latest
      </IonSegmentButton>
      <IonSegmentButton
        name='Culture'
        id='culture'
        as={Link}
        to={{ pathname: '/culture' }}
        onClick={handleItemClick}
      >
        Culture
      </IonSegmentButton>
      <IonSegmentButton
        name='Tech'
        id='tech'
        as={Link}
        to={{ pathname: '/tech' }}
        onClick={handleItemClick}
      >
        Tech
      </IonSegmentButton>
      <IonSegmentButton
        name='Food'
        id='food'
        as={Link}
        to={{ pathname: '/food' }}
        onClick={handleItemClick}
      >
        Food
      </IonSegmentButton>
      <IonSegmentButton
        name='Sports'
        id='sports'
        as={Link}
        to={{ pathname: '/sports' }}
        onClick={handleItemClick}
      >
        Sports
      </IonSegmentButton>
    </IonSegment>
  )
}

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem
  }
}

export default connect(mapStateToProps)(Menu)
