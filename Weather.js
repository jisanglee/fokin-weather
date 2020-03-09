import React from "react";
import { StyleSheet, View, Text ,StatusBar} from "react-native";
//StatusBar는 위에 있는 시간,와이파이표시,알림표시,진동...등등 상태바를 바꾸는데 쓰인다. 안보이게할수도, 생상을 바꿀수도 등등..
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons"; //icon라이브러리 expo 꺼임.
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitle:"Just don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
        },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
        },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
        },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
        },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
        },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
        },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
        },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
        },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
        },
}

//Weather은 stateless 컴포넌트가 될꺼임.
export default function Weather({temp,condition}){
    return (
        <LinearGradient
            style={styles.container}
            colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                size={96} 
                name={weatherOptions[condition].iconName}
                color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <View style={styles.textContainer,styles.halfContainer}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}
//Weather.propTypes 할때 대소문자잘봐야함. propTypes소문자로써야함이건. 안그러면 warning일어나고 error오지게뜸.
Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    //아래녀석은 리스트에서 가져오는거.
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Ash",
        "Fog",
        "Smoke",
        "Sand",
        "Squall",
        "Tornado",
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp:{
        fontSize:42,
        color:"white",
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontWeight:"300",
        fontSize:44,
        marginBottom:10
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});