import Display from './Display'
import './App.css'

function App() {
  return(
    <>
      <div className="basictext">
        <h1>Hi to you all !</h1>
        <h3>Here's a calculator to help you.</h3>
      </div>
      <div className="display">
        <Display></Display>
      </div>
      {/* <Calculator/> */}
      <h2 style={{fontSize: 12,marginTop: 100}}>@nikhilpatidar</h2>
      
    </>
  )
}

export default App
