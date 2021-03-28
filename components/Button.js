import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button({value,onPress}) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnContainer:{
    backgroundColor:'#eee888',
    margin:2,
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:25,
    fontWeight:'bold'
  }
})