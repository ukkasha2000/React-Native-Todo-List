import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import { styles } from "../styles";
import { Feather } from "@expo/vector-icons";

const ListItem = ({ data, setItems, setInput, setId }) => {
  const deleteTodo = (id) => {
    setItems((prevValue) => prevValue.filter((todo) => todo.id !== id));
    setInput("");
    setId("");
  };

  const updateTodoFunction = (obj) => {
    setInput(obj.data);
    setId(obj.id);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={data}
          renderItem={(todo) => (
            <TouchableOpacity
              onPress={() => deleteTodo(todo.item.id)}
              style={styles.container}
            >
              <Text style={styles.listItem}>{todo.item.data}</Text>
              <Feather.Button
                name="edit"
                size={24}
                color="red"
                backgroundColor="transparent"
                onPress={() => updateTodoFunction(todo.item)}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default ListItem;
