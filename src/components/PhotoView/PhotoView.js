import React, {useEffect, useState, useReducer} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  VirtualizedList,
  SafeAreaView,
  Modal,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {useRoute} from '@react-navigation/native';

const PhotoView = ({navigation}) => {
  const route = useRoute();

  return (
    <ScrollView style={{flex: 1}}>
      <Image
        style={styles.image}
        source={{uri: route.params.url}}
        resizeMode="cover"
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 50,
    marginBottom: 20,
  },
});
export default PhotoView;
