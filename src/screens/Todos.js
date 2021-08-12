import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import 'react-native-get-random-values';
import { FlatList, View } from 'react-native'

import { TodoItem, AddTodoItem } from '../components/index';

import { globalStyles } from '../styles/global.style';

export default function Todos () {
  const [ todos, setTodos ] = useState([
    { text: 'buy coffee', key: '1', isDone: false },
    { text: 'create an app', key: '2', isDone: false },
    { text: 'sleep', key: '3', isDone: true },
    { text: 'buy coffee 1', key: '4', isDone: false },
    { text: 'create an app 1', key: '5', isDone: false },
    { text: 'sleep 1', key: '6', isDone: true },
    { text: 'buy coffee 2', key: '7', isDone: false },
    { text: 'create an app 2', key: '8', isDone: false },
    { text: 'sleep 2', key: '9', isDone: true },
    { text: 'buy coffee 3', key: '10', isDone: false },
    { text: 'create an app 3', key: '11', isDone: false },
    { text: 'sleep 3', key: '12', isDone: true },
    { text: 'buy coffee 4', key: '13', isDone: false },
    { text: 'create an app 4', key: '14', isDone: false },
    { text: 'sleep 4', key: '15', isDone: true },
  ]);

  const setDoneStatus = (key) => {
    setTodos((prevTodos) =>
      prevTodos.map(todo => todo.key === key ? Object.assign(todo, { isDone: !todo.isDone }) : todo)
    )
  }

  const onDelete = (key) => {
    setTodos((prevTodos) =>
      prevTodos.filter(todo => todo.key !== key)
    )
  }

  const onTodoAdd = (text) => {
    setTodos((prevTodos) =>
      [ { text, isDone: false, key: uuidv4() }, ...prevTodos ]
    )
  }

  return (
    <View style={globalStyles.container}>
      <AddTodoItem onTodoAdd={onTodoAdd} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} setDoneStatus={setDoneStatus} onDelete={onDelete} />
        )}
      />
    </View>
  );
}
