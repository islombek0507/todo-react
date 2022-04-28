// import logo from './logo.svg';
import './App.css';
import { List } from './components/List/List';
import { ListItem } from './components/ListItem/ListItem';
import { useState } from 'react';
// import './bootstrap.css';

function App() {
  const [allTodos, setAllTodos] = useState([])

  const hendleAddTodo = (evt) => {
    let count = allTodos.at(0)?.id ? allTodos.at(0).id + 1 : 1;

    if (evt.keyCode === 13) {
      let newTodo = {
        id: count,
        text: evt.target.value,
        isComplated: false
      }

      setAllTodos([newTodo, ...allTodos])
      evt.target.value = null
    }
  }



  return (
    <div className='root'>
      <input  onKeyUp={hendleAddTodo} type="text" placeholder="Todo text" required />
      {allTodos.length > 0 && <List >
        {
          allTodos.map(todo => (
            <ListItem 
              key={todo.id}
              todo={todo}
              allTodos={allTodos}
              setAllTodos={setAllTodos}
            />
          ))
        }
      </List>}
    </div>
  );
}

export default App;
