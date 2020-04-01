import React from 'react'
import { connect } from 'react-redux'
import { IonContent, IonGrid, IonButton, IonCard, IonCardTitle, IonCardContent} from '@ionic/react'
import { fetchSingleArticle } from "../state/actions/articleActions"
import { bindActionCreators } from "redux"

const DisplayArticles = props => {
  const singleArticle = articleID => {
    props.fetchSingleArticle(articleID);
  };
  let articles
  if (props.categoryName) {
    articles = props.articles.filter(article => {
      return article.category === props.categoryName && article
      debugger
    })
  } else {
    articles = props.articles
  }

  
  let articleDisplay = props.articles.map(article => {
    return (
      <IonGrid key={article.id} align='center'>
        <IonCard>
          <IonCardTitle>{article.title}</IonCardTitle>
          <IonCardContent>{article.lead}</IonCardContent>
          <IonButton
            id={`open-article-${article.id}`}
            onClick={() => singleArticle(article.id)}
            key={article.id}>
            Read More
          </IonButton>
        </IonCard>
      </IonGrid>
    )
  })
  return <IonContent id='article-list'>{articleDisplay}</IonContent>
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    categoryName: state.categoryName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles)