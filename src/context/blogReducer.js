const initialState = {
    posts: [],
    lastStatus: ''
}
const reducer = (state = initialState, action) => {
    let [result,posts]=['','']
    switch (action.type) {
        case 'GET_POSTS':
            return { ...state, posts: action.payload };

        case 'CLEAR_POSTS':
            return { ...state, posts: [] };

        case 'DELETE_POST':

             result = state.posts.filter(post => {
                return post.title != action.payload.title && post.body != action.payload.body
            })

            return { ...state, posts: result };

        case 'ADD_POSTS':

            result = state.posts.find((post) => {
                return action.payload.title === post.title && action.payload.body === post.body
            })
            posts = !result ? [action.payload, ...state.posts] : state.posts
            return { ...state, posts: posts };

        case 'FILTER_POSTS':
            return { ...state, lastStatus: action.payload };

        default:
            new Error('action not found')
    }
}
export { reducer, initialState }

