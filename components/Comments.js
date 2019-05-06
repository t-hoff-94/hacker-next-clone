import Comment from './Comment'

export default ({ comments }) => (
  <section className='comments-section'>
    {comments.map( comment => console.log(comment.comments)||(
      <Comment key={comment.id} comment={comment}/>
    ) )}
  </section>
)

function checkCommentLayer(arr) {
  console.log(arr);
}
