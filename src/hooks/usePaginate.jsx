import { useEffect } from 'react'
import axios from 'axios'

export const usePaginate = (link,params,setList) => {
    useEffect(() => {
        const fetchData = async () => {
          link &&
            axios
              .get(
                process.env.REACT_APP_API +
                  link,
                //{ headers: { Authorization: `Bearer ${session.getAccessToken().getJwtToken()}` }
                {params },
              )
              .then((res) => {
              
                setList((prev) => {
                  let copy = [...prev]
                  copy = [...copy, ...res.data]
                  return copy;
                })
              })
        }
        fetchData()
      }, [params])
}

export default usePaginate