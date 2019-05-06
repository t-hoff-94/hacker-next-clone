import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import styled from 'styled-components'

import Comments from '../components/Comments'

const SingleArticle = styled.article`
  .story-details {
    strong {
      margin-right: 15px;
    }
  }
`;

import Layout from '../components/Layout'

class Article extends React.Component {
  render() {
    const { article } = this.props;
    console.log(article)
    if(!article) return <Error />
    return (
      <Layout title={article.title}>
        <SingleArticle>
          <div className='story-details'>
            <strong>{article.points} points</strong>
            <strong>{article.comments_count} comments</strong>
            <strong>{article.time_ago}</strong>
          </div>
          <h2>{article.title}</h2>
          {article.comments.length > 0 ? (
            <Comments comments={article.comments}/>
          ) : <div>No Comments</div>}
        </SingleArticle>
      </Layout>
    )
  }
}

Article.getInitialProps = async function({ req, res, query={} }) {
  let data;
  const articleId = query.id;
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${articleId}`);
    data = await res.json()
  } catch (err) {
    console.log(err);
    data = null;
  }

  return {
    article: data,
  }
}

export default Article
