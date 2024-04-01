import './App.css'
import { useState, useEffect } from 'react'
import UseFetch from './hooks/UseFetch'


function App() {
  const [postId, setPostId] = useState('')
  const [result, loading] =  UseFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, 
  {headers: {
    abc: '1' + postId,
  },
})

  useEffect(() => {
    console.log('ID do post', postId);
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    // 1
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
              <p>{p.title}</p>
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

  return <h1>Oi</h1>;
}

export default App
