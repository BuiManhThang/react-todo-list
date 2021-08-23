import { useState, useRef, useEffect } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import List from './components/List/List';
import Input from './components/Input/Input';

const DATA = [
  {
    id: 1,
    text: 'Listen to music',
    completed: false
  },
  {
    id: 2,
    text: 'Watch tv',
    completed: true
  },
  {
    id: 3,
    text: 'Play game',
    completed: false
  },
]

function App() {
  const [data, setData] = useState(DATA);
  const [inputText, setInputText] = useState('');
  const [editedTask, setEditedTask] = useState(null);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const removeEditingState = (e) => {
    if(!formRef.current.contains(e.target)) {
      setEditedTask(null);
      setInputText('');
    }
  }

  useEffect(() => {
    if(editedTask) {
      document.addEventListener('mousedown', removeEditingState);
    } else {
      document.removeEventListener('mousedown', removeEditingState);
    }
  }, [editedTask])

  const handleCheck = (id) => {
    const newData = data.map(task => {
      if(task.id === id) {
        return {...task, completed: !task.completed};
      }
      return {...task};
    })
    setData(newData);
  }

  const handleAddTask = (text) => {
    if(editedTask) {
      const newData = data.map(task => {
        if(task.id === editedTask) {
          return {...task, text: text};
        }
        return {...task};
      });
      setData(newData);
      setEditedTask(null);
      setInputText('');
    } else {
      const task = {
        id: Math.random(),
        text: text,
        completed: false
      };
      const newData = [task, ...data];
      setData(newData);
    }
  }

  const handleClickTask = (id) => {
    setEditedTask(id);
    const foundTask = data.find(task => {
      return task.id === id;
    })
    setInputText(foundTask.text)
    inputRef.current.focus();
  }

  const handleDeleteTask = (id) => {
    const newData = data.filter(task => {
      return task.id !== id;
    });
    setData(newData);
  }

  return (
    <div className="App">
      <Container>
        <Header></Header>
        <List data={data} onDeleteTask={handleDeleteTask} onCheck={handleCheck} onClickTask={handleClickTask} editedTask={editedTask} ></List>
        <Input formRef={formRef} onAddTask={handleAddTask} inputRef={inputRef} inputText={inputText} ></Input>
      </Container>
    </div>
  );
}

export default App;
