import { usePosts } from "../context/BlogProvider";
import {deletePost} from '../context/blogAction'

const List = () => {
    const { state, dispatch } = usePosts()
 
    const searchedPosts =
    state.lastStatus.length > 0
        ? state.posts.filter((post) =>
            `${post.title} ${post.body}`
                .toLowerCase()
                .includes(state.lastStatus.toLowerCase())
        )
        : state.posts;
  
    return (
      <ul >
        {searchedPosts.map((post, i) => (
          <li key={i} >
            <h3 >{post.title}</h3>
            <p>{post.body}</p>
            <span onClick={()=>dispatch(deletePost({title:post.title, body:post.body})) }>X</span>
          </li>
        ))}
      </ul>
    );
}

export default List