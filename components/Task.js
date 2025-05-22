import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom: 20,
    alignItems:'center'
  },
  itemleft: {
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
  },
  square: {
    height: 25,
    width: 25,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius:5,
    marginRight:15
  },
  itemText: {
    maxWidth:'80%'
  },
  circular: {
    height:12,
    width:12,
    borderColor:"#55bcf6",
    borderWidth:2,
    borderRadius:5
  },
});
export default Task;
