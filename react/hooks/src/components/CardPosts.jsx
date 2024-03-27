import React from 'react'
import UseMemo from '../pages/UseCallback'

const CardPosts = ({posts}) => {
  console.log('card atualizou')
  return (
    <>
        {posts && posts.map((post)=>[
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ])}
    </>
  )
}

export default CardPosts