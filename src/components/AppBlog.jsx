import { useEffect} from "react"
import { usePosts } from "../context/BlogProvider"
import {setPosts} from '../context/blogAction'
import {createRandomPost} from '../fileJs'
import Header from "./Header"
import Main from "./Main"
import Archive from "./Archive"
import Footer from "./Footer"
const AppBlog = () => {

    const {dispatch } = usePosts()

    useEffect(() => {
      const posts =  createRandomPost(10)
  
      dispatch(setPosts(posts))
  
    }, [dispatch])
  
    return (
      <>
        <section>
          <Header />
          <Main />
          
          <Archive dispatch={dispatch}/>
          <Footer />
        </section>
      </>
  
    )
}

export default AppBlog