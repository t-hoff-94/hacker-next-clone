import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

import Articles from '../components/Articles'
import Layout from '../components/Layout'

class Index extends React.Component {
  render () {
    const { articles } = this.props
    console.log(articles)
    if(articles.length === 0) {
      return <Error />
    }
    return (
      <Layout>
        <Articles articles={articles}/>
      </Layout>
    )
  }
}

Index.getInitialProps = async function() {
  let data;

  try {
    const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
    data = await res.json()
  } catch (err) {
    console.log(err);
    data = [];
  }

  return {
    articles: data,
  }
}

export default Index
