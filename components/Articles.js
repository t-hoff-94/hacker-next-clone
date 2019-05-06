import Link from 'next/link'
import styled from 'styled-components'

import Pagination from './Pagination'

const ArticleList = styled.div`
  .article {
    line-height: 1.3;
    margin-bottom: 1.3rem;
  }
  .story-title {
    font-size: 1.5rem;
    a {
      color: #333;
      text-decoration: none;
    }
  }
  .story-details {
    font-size: 1.1rem;
    a {
      text-decoration: none;
    }
    .count {
      margin-right: 9px
    }
    .comments {
      color: teal;
    }
  }
`

const Article = ({ item }) => (
  <article className='article'>
    <h2 className='story-title'>
      <a href={`/article?id=${item.id}`}>{item.title}</a>
    </h2>
    <div className='story-details'>
      <span className='count'>{item.points || 0} points</span>
      <Link href={`/article?id=${item.id}`}>
        <a className='comments'>{item.comments_count || 0} comment{item.comments_count > 1 || item.comments_count === 0 ? 's' : ''}</a>
      </Link>
    </div>
  </article>
)

const Articles = ({ articles, page }) => console.log(articles)||(
  <ArticleList>
    {articles.map(item => (
      <Article key={item.id} item={item}/>
    ))}
    <Pagination page={page} />
  </ArticleList>
)

export default Articles
