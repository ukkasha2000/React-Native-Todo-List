import { View } from "react-native";
import { styles } from "./styles";
import TodoInput from "./components/TodoInput";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [id, setId] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const date = new Date();

  const addUpdateTodoFunction = () => {
    // add todo
    if (input !== "" && id === "") {
      setTodoItems((prev) => [...prev, { id: date.getTime(), data: input }]);
      setInput("");
      setId("");
    }
    // update todo
    else if(input !== "" && id !== ""){
      todoItems.find((x) => {
        if (x.id === id) {
          x.data = input;
        }
      });
      setTodoItems([...todoItems]);
      setInput("");
      setId("");
    }
  };

  useEffect(() => {
    console.log(todoItems);
  }, [todoItems]);
  return (
    <View style={styles.mainContainer}>
      <TodoInput
        text={input}
        onChangeText={setInput}
        onClick={addUpdateTodoFunction}
      />
      <ListItem data={todoItems} setItems={setTodoItems} setInput={setInput} setId={setId}/>
    </View>
  );
}
