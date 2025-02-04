import {useGetGeneralNewsQuery} from "../../news/services/NewsServices"


const useNewsService = () => {
   const {data,isloading,isError}=useGetGeneralNewsQuery()
   console.log(data)


  return {}
}

export default useNewsService
