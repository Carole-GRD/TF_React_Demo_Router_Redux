
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './containers/footer/footer'
import Header from './containers/header/header'

function App() {


  return (

    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
