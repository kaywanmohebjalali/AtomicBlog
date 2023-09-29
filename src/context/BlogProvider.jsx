
import {useContext, useMemo, useReducer } from "react";
import { BlogContext } from "./blogContext";
import { reducer, initialState } from "./blogReducer";

const BlogProvider = (prop) => {
  const {children} = prop
  const [state, dispatch]= useReducer(reducer,initialState)
  const value =useMemo(()=>{
      return{state:state, dispatch:dispatch}
},[state,dispatch])
  
  return <BlogContext.Provider value={value}>
    {children}
    </BlogContext.Provider>;
};

function usePosts(){
  const context = useContext(BlogContext)
  if(context===undefined)throw new Error('usePosts was used outside of the BlogProvider')
  return context
}

export  {BlogProvider, usePosts};
