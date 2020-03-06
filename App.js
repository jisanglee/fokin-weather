import React from 'react';
import Loading from "./Loading";

//웹에선 div안에 span에 텍스트를 담지만 여기선view안에 Text에 담는다.
export default function App() {
  return <Loading />;
}
//flex는 flex direction이 column이 기본임(위에서 아래). row로도 바꿀수있음. view안에 녀석들이 flex 1, 1이렇게가져가면 반반, 1,5 이러면 1/6, 5/6임.
//flexDirection:"row",
