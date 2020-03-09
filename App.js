import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';
//웹에선 div안에 span에 텍스트를 담지만 여기선view안에 Text에 담는다.
const API_KEY = "26e5a41384bd3a2024cc41dcfeeafd26";
export default class extends React.Component {
  state = {
    isLoading : true
  };

  getWeather = async(latitude,longitude) => {
    const { 
      data: {
        main: { temp },
        weather
      } 
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      console.log(temp);
      console.log(weather[0].main);

      //Send to API nad get weather
      this.setState({
        isLoading: false,
        condition:  weather[0].main,
        temp });
  }

  getLocation = async() => {
    try {
      //로케이션 권한 체크.
      await Location.requestPermissionsAsync();
      //밑에녀석은 타임스탬프도있으니 요긴하게쓸수있을듯.
      const {
        coords:{ latitude,longitude }
      } = await Location.getCurrentPositionAsync(); //async란 단어를 보면 이건  await가 필요.
      //navigator.getCurrentPositionAsync를 쓸수도있지만 위에건 expo꺼임.
      //로케이션 indicator가져옴. 잘작ehd
      //Get Weather data
      this.getWeather(latitude,longitude);
      //this.setState({isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you.","So sad...");
    }

  }
  componentDidMount() {
    this.getLocation();
  }
  //component
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition = {condition} />;
    //위의 뜻은 <Loading />을 리턴하고 아니면 null리턴. 
  }
}
//flex는 flex direction이 column이 기본임(위에서 아래). row로도 바꿀수있음. view안에 녀석들이 flex 1, 1이렇게가져가면 반반, 1,5 이러면 1/6, 5/6임.
//flexDirection:"row",
