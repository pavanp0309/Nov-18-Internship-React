import {useState} from 'react'
import MusicApp from './components/MusicApp'

const App = () => {
  const [dark, setDark] = useState(false);

  function handleDarkMode() {
    setDark(!dark);
  }
  return (
    <div  className={dark?"dark-mode":""}>
      <MusicApp 
      onHandleDark={handleDarkMode}
      mode={dark}/>
    </div>
  )
}

export default App
