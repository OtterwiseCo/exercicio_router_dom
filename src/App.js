import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import JokeDetails from './routes/JokeDetail'

// Criar a navegação entre os componentes a seguir, utilizar a lib react-router-dom

const App = () => {
  return (
    <>
      <Dashboard />
      <Login />
      <JokeDetails />
    </>
  )
}

export default App
