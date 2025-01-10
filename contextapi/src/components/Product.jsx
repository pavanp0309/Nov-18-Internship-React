
import { useContext } from 'react'
import Amazon from '../store/Store'

const Product = () => {
    let {isDark}=useContext(Amazon)
    let data=["Iphone","Vivo","Sumsung"]
  return (
    <div className='pr'>
      {
        data.map((ele)=>(
            <li className='' id='card'>
                <h1>{ele}</h1>
            </li>
        ))
      }
    </div>
  )
}

export default Product
