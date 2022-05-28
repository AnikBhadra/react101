import Car_class from '../Components/Car_class'
import Football_function from '../Components/Football_function'
import Name from '../Components/Name'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Car_class />
        <Football_function />
        <Name n="Anik" />
      </header>
    </div>
  )
}

export default App
