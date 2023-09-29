import { usePosts } from "../context/BlogProvider";
import {filterPost} from '../context/blogAction'

const SearchPosts = () => {
    const {dispatch } = usePosts()



    return (
      <input
        onChange={(e) => dispatch(filterPost(e.target.value))}
        placeholder="Search posts..."
      />
    );
}

export default SearchPosts