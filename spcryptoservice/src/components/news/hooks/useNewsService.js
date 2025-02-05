import {useGetGeneralNewsQuery} from "../../news/services/NewsServices"


const useNewsService = (category="business") => {
   const {data,isloading,isError}=useGetGeneralNewsQuery({category})
   console.log(data)

  let news=data?.articles || []


  return {news ,isloading,isError}
}

export default useNewsService
