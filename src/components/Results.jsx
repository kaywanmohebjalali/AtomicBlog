import { usePosts } from '../context/BlogProvider';

const Results = () => {
    const { state} = usePosts()
    return <p>🚀 {state.posts.length} atomic posts found</p>;
}

export default Results