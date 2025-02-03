import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className='App'>
      <Header />
      <Editor />
      <TodoList /> 
    </div>
  )
}

export default App
