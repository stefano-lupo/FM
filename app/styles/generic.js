import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


export const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
  },
});

export const formStyle = StyleSheet.create({
  textInput: {
    height: 50,
    padding: 5,
    marginBottom: 20,
    alignContent: 'center',
  },
});