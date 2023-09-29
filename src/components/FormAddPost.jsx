import { useCallback, useRef } from "react";
import { usePosts } from "../context/BlogProvider";
import {addPost} from '../context/blogAction'

const FormAddPost = () => {
    const {dispatch } = usePosts()
    const titleEle = useRef('')
    const bodyEle = useRef('')
  
  
    const handleSubmit =useCallback( function (e) {
      e.preventDefault();
      let title = titleEle.current.value
      let body = bodyEle.current.value
      if (!body || !title) return;
      dispatch(addPost({title: title, body: body}))
      titleEle.current.value=''
      bodyEle.current.value=''
    },[dispatch]);
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          ref={titleEle}
          placeholder="Post title"
        />
        <textarea
        ref={bodyEle}
          placeholder="Post body"
        />
        <input type="submit" value="Add post" />
      </form>
    );
}

export default FormAddPost