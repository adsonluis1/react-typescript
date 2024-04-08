import React, { useState } from 'react'
import UseFetch from '../hooks/UseFetch'


const Posts = () => {
    const [postId, setPostId] = useState('')
    const [result, loading] =  UseFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, 
    {headers: {
        abc: '1' + postId,
    },
    })

    const handleClick = (id) => {
        setPostId(id);
    };
    
    if (loading) {
    return <p>Loading...</p>;
    }
    console.log(result)
    if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Posts