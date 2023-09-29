import { useCallback } from 'react'
import { usePosts } from '../context/BlogProvider'
import {clearAllPosts} from '../context/blogAction'
import Results from './Results'
import SearchPosts from './SearchPosts'

const Header = () => {
  const {dispatch} = usePosts()

  return (
    <header>
    <h1>
      <span>⚛️</span>The Atomic Blog
    </h1>
    <div>
      <Results />
      <SearchPosts />
      <button onClick={useCallback(() => dispatch(clearAllPosts(),[dispatch]))}>Clear posts</button>
    </div>
  </header>
  )
}

export default Header