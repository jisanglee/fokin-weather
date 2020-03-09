import React from "react";
import {StyleSheet,Text,View,StatusBar} from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:30,
        paddingVertical:100,
        //이부분은 리액트밖에없음.
        backgroundColor:"#FDF6AA",
    },
   text:{
       color:"#2c2c2c",
       fontSize:30, 
       // px쓰러면 "20px"이렇게써야함.
   } 
});