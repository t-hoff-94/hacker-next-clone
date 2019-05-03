import Link from 'next/link'
import styled from 'styled-components'

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
      margin-right: 15px
    }
    .comments {
      color: teal;
    }
  }
`

const Articles = ({ articles }) => (
  <ArticleList>
    {articles.map(item => (
      <article className='article' key={item.id}>
        <h2 className='story-title'>
          <a href={`/story?id=${item.title}`}>{item.title}</a>
        </h2>
        <div className='story-details'>
          <span className='count'>{item.points || 0} points</span>
          <Link href={`/article?id=${item.id}`}>
            <a className='comments'>{item.comments_count || 0} comment{item.comments_count > 1 || item.comments_count === 0 ? 's' : ''}</a>
          </Link>
        </div>
      </article>
    ))}
  </ArticleList>
)

export default Articles
