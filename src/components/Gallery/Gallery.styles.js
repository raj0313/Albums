import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 150,
    margin: 20,
  },
  list: {
    //flex:1
  },
});
export default styles;
