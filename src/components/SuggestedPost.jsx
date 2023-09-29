import { memo } from "react";
import {addPost} from '../context/blogAction'

const SuggestedPost = (prop) => {
  console.log('SuggestedPost');
  const {post,dispatch} =prop
  // const { dispatch } = usePosts()

    return (
      <li className="suggest" >
        <p >
          <strong>{post.title} : </strong> {post.body}
        </p>
        <button  onClick={() => dispatch(addPost(post))}>Add as new post</button>
  
      </li>
    )
}

export default memo(SuggestedPost)