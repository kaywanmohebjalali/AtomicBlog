
const SET='GET_POSTS' ;
const ADD= 'ADD_POSTS';
const DELETE= 'DELETE_POST';
const FILTER= 'FILTER_POSTS';
const CLEAR='CLEAR_POSTS';

function setPosts(data){
    return{
        type:SET,
        payload:data
    }
}
function addPost(data){
    return{
        type:ADD,
        payload:data
    }
}
function deletePost(data){
    return{
        type:DELETE,
        payload:data
    }
}
function filterPost(data){
    return{
        type:FILTER,
        payload:data
    }
}
function clearAllPosts(){
    return{
        type:CLEAR,
    }
}



export {
    setPosts,
    addPost,
    deletePost,
    filterPost,
    clearAllPosts
     }