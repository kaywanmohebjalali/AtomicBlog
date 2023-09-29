/* eslint-disable react-refresh/only-export-components */
import { memo, useCallback, useRef, useState } from "react";
import { createRandomPost } from "../fileJs";
import SuggestedPost from "./SuggestedPost";


const Archive = (prop) => {
 const {dispatch} =prop
 const [showArchive, setShowArchive] = useState(false);
 const [posts,setPosts] = useState(() =>
 createRandomPost(10)
 );

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => {
        
        if(showArchive) {
        
          setPosts(createRandomPost(10))

        } 
        setShowArchive(s => !s)
      }
      }>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && (
        <ul>
          
          {posts.map((post, i) => (
            <SuggestedPost key={i} {...{ post,dispatch}} />
          ))}
           <button onClick={()=>{
     

            setPosts([...posts,...createRandomPost(10)])
          
          }}>more</button>

        </ul>
      )}
    </aside>
  );
}

export default memo(Archive)

