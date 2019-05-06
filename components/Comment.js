import styled from 'styled-components'

const StyledComment = styled.article`
  margin-bottom: 1.5rem;
  .comment-user {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: teal;
  }
  .nested-comments {
    padding-left: 1em;
  }
`

class Comment extends React.Component {
  render() {
    return(
      <StyledComment>
        <div className='comment-user'>{this.props.comment.user}</div>
        <div
          className='comment-content'
          dangerouslySetInnerHTML={{__html: this.props.comment.content}}
        />
          {this.props.comment.comments && (
            <div className='nested-comments'>
              {this.props.comment.comments.map( comment => (
                <Comment comment={comment} key={comment.id}/>
              ))}
            </div>
          )}
      </StyledComment>
    )
  }
}

export default Comment
