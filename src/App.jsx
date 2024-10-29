import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Item'

function App() {
  const [count, setCount] = useState(0)

  const items = [
    { id: 1, name: 'Item 1', description: 'This is item 1' },
    { id: 2, name: 'Item 2', description: 'This is item 2' },
    { id: 3, name: 'Item 3', description: 'This is item 3' },
];

  return (
    <>
     <div className="app">
            <h1>My React App</h1>
            <div className="item-list">
                {items.map(item => (
                    <Item key={item.id} name={item.name} description={item.description} />
                ))}
            </div>
        </div>
    </>
  )
}

export default App
