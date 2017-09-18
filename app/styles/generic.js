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
    paddingVertical: 5,
    marginBottom: 20,
    alignContent: 'center',
  },
  multiline: {
    height: 150,
    borderWidth: 1,
    alignContent: 'center',
  },
  dummyPadding: {
    paddingBottom: 200,
  }
});