import React, {Component} from 'react';
import './App.scss';
import axios from 'axios';

// FontAwesome Library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faRss, faEnvelope, faTwitter, faFacebookF);


function ArticleLink({article}) {
  console.log(article);
  return <div className="article-link">{article.title}</div>;
}

function Navigation({articles}) {
  return (
    <ul className="nav__links">

      {articles.map(article => (
        <li key={article.title}>
          <ArticleLink article={article}/>
        </li>
      ))}
    </ul>
  );
}

function Article({article}) {

  let mailTo = `mailto:?subject=Sharing Saatva Mattress News!&body=Hi,I found this website\n" +
    "and thought you might like it ${article.url}/`;
  return (
    <>
      <h1>{article.title}</h1>
      <img className="content__image" src={article.urlToImage} alt=''/>
      <ul className="content__social">
        <li>
          <a href=''><FontAwesomeIcon icon="rss" className="icon_rss"  /></a>
        </li>
        <li>
          <a href=''><FontAwesomeIcon icon={["fab","twitter"]} className="icon_twitter" /></a>
        </li>
        <li>
          <a href=''><FontAwesomeIcon icon={["fab","facebook-f"]} className="icon_facebook" /></a>
        </li>
        <li>
          <a href={mailTo}><FontAwesomeIcon icon="envelope" /></a>
        </li>
      </ul>
      <div className="content__article" dangerouslySetInnerHTML={{__html: article.long_description}}>

      </div>
    </>
  );
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    axios.get("http://s3-us-west-2.amazonaws.com/saatva-hiring/news.json")
      .then(
        (result) => {
          console.log(result.data.articles);
          this.setState({
            isLoaded: true,
            articles: result.data.articles
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    const { error, isLoaded, articles } = this.state;

    if (error) {
      // console.log(error);
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <div className="banner">
            {/*<svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 38.263"><title>logo_saatva_new</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M59.844,37.484H54.926v-4.8a13.15,13.15,0,0,1-10.675,5.576c-8.517,0-15.413-6.956-15.413-16.193,0-9.295,6.957-16.252,15.533-16.252,8.756,0,15.473,7.137,15.473,16.252ZM44.371,10.5c-5.758,0-10.435,5.1-10.435,11.574s4.677,11.456,10.435,11.456c5.7,0,10.435-5.1,10.435-11.456C54.806,15.653,50.008,10.5,44.371,10.5Z" fill="#c1a38b"></path><path d="M96.3,37.484H91.385v-4.8a13.15,13.15,0,0,1-10.674,5.576c-8.517,0-15.414-6.956-15.414-16.193,0-9.295,6.957-16.252,15.533-16.252,8.756,0,15.474,7.137,15.474,16.252ZM80.83,10.5c-5.757,0-10.435,5.1-10.435,11.574S75.073,33.526,80.83,33.526c5.7,0,10.435-5.1,10.435-11.456C91.265,15.653,86.467,10.5,80.83,10.5Z" fill="#c1a38b"></path><path d="M115.01,37.484c-7.2.84-12.175-3.419-12.175-11.275V0h5.039V6.6h7.016v4.858h-7.016V26.209c0,5.458,3.3,6.837,7.136,6.6Z" fill="#c1a38b"></path><path d="M119.235,6.6h5.4l8.516,24.109h.06L141.726,6.6h5.4L135.908,37.484h-5.457Z" fill="#c1a38b"></path><path d="M180,37.484h-4.919v-4.8a13.15,13.15,0,0,1-10.674,5.576c-8.517,0-15.414-6.956-15.414-16.193,0-9.295,6.957-16.252,15.534-16.252C173.283,5.818,180,12.955,180,22.07ZM164.527,10.5c-5.758,0-10.436,5.1-10.436,11.574s4.678,11.456,10.436,11.456c5.7,0,10.435-5.1,10.435-11.456C174.962,15.653,170.164,10.5,164.527,10.5Z" fill="#c1a38b"></path><path d="M0,33.218a19.382,19.382,0,0,0,13,4.937c6.774,0,11.151-3.651,11.151-9.3v-.09c0-4.814-2.806-7.372-10.009-9.124-6-1.421-7.636-2.516-7.636-5.092v-.09c0-2.283,2.17-3.877,5.276-3.877a14.285,14.285,0,0,1,8.545,3.2l2.829-3.987A17.269,17.269,0,0,0,11.867,5.924c-6.273,0-10.655,3.714-10.655,9.03v.09c0,5.707,3.661,7.673,10.416,9.305,5.54,1.278,7.229,2.436,7.229,4.956v.09c0,2.454-2.3,4.1-5.726,4.1-3.613,0-6.69-1.251-9.958-4.052Z" fill="#c1a38b"></path></g></g></svg>*/}
            Saatva News
          </div>
          <div className="main">
            <div className="nav main__flex-item">
              <Navigation articles={articles}/>
            </div>
            <div className="content main__flex-item">
              <Article article={articles[0]}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
