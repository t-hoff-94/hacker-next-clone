import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

import Articles from '../components/Articles'
import Layout from '../components/Layout'

class Index extends React.Component {

  render () {
    const { articles } = this.props
    console.log(this.props)
    if(articles.length === 0) {
      return <Error />
    }
    return (
      <Layout title='Hacker Next' description='A Hacker News clone built with Next.js'>
        <Articles articles={articles}/>
      </Layout>
    )
  }
}

Index.getInitialProps = async function({ req, res, query={} }) {
  let data;
  const page = query.page || 1;
  try {
    const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
    data = await res.json()
  } catch (err) {
    console.log(err);
    data = [];
  }

  return {
    articles: data,
    page: page,
  }
}

export default Index
