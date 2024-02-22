import { useMemo } from "react"
import { useLocation } from "react-router-dom"

const useQuery = () => {
  const searth = useLocation().search

  return useMemo(()=> new URLSearchParams(searth))
}

export default useQuery