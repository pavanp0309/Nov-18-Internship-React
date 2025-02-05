import React from 'react'
import useNewsService from '../hooks/useNewsService'

const News = () => {
  // fetching the news from api
  let category="entertainment"
  const {news,isloading,isError}=useNewsService(category);
  if(isloading){
    return <h3>loading...</h3>
  }
  if(isError){
    return <h3>error..</h3>
  }
  return (
    <div className='row gy-2'>
      {
        news.map((n)=>(
          <div className='col-12 col-sm-12 col-md-4 col-lg-4'>
              <div className="card shadow border border-primary" >
                      <img src={n.image} className="card-img-top" alt="..."  width="100%" height="200px"/>
                      <div className="card-body">
                        <h5 className="card-title">{n?.source?.name}</h5>
                        <p className="card-text">{n.title}</p>
                        <a href={n.url} className="btn btn-primary">Go somewhere</a>
                      </div>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default News
