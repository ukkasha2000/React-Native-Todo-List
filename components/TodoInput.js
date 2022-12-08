import { View, TextInput, Button } from "react-native";
import { styles } from "../styles";

const TodoInput = ({ text, onChangeText, onClick }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={onClick}
        title="Add Todo"
        color="rgb(38,35,212)"
      />
    </View>
  );
};

export default TodoInput;
