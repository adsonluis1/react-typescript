import React from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import  useQuery  from '../../hooks/useQuery'
import { useLocation } from 'react-router-dom'

const Searchs = () => {
  const query = useQuery()
  const url =query.get('q')
    return (
    <div>
        <h1>{url}</h1>
    </div>
  )
}

export default Searchs