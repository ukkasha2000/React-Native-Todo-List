import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainContainer: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    listItem: {
      padding: 10,
      margin: 10,
      backgroundColor: "rgb(218,237,25)",
      borderColor: "#000",
      borderStyle: "solid",
      borderWidth: 1,
      width: "80%"
    },
    scrollView: { width: "100%" },
  });