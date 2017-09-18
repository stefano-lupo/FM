import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


export default StyleSheet.create({
  list: {
    marginTop: 2,
    marginBottom: 20,
  },
  listHeader: {
    fontSize: 18,
    marginLeft: 10,
  },
  listItemContainer: {
    backgroundColor: 'white',
    marginVertical: 1,

  },
  listItem: {

  }
});