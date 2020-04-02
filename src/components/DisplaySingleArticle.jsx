import React from 'react'
import { connect } from 'react-redux'
import { IonContent, IonGrid, IonButton } from '@ionic/react'

const DisplaySingleArticle = props => {
  let articleDetails
  let article = props.singleArticle
  articleDetails = (
    <IonGrid key={article.id} align='center'>
      <h1>{article.title}</h1>
      <h4>{article.lead}</h4>
      <p>{article.content}</p>
      <IonButton
        id='back-button'
        color='danger'
        onClick={() => props.dispatch({ type: 'BACK_TO_ARTICLE_LIST' })}
        key={article.id}
      >
        Back
      </IonButton>
    </IonGrid>
  )
  return (
    <IonContent id='single-article'>
      {articleDetails}
    </IonContent>
  )
}

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  }
}

export default connect(mapStateToProps)(DisplaySingleArticle)
