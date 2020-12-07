import React, { useState } from 'react';
import io from "socket.io-client";
import axios from "axios";
const socket = io.connect("http://localhost:3002",{ withCredentials: true });



const TestArea = (() => {
 
    const [hookValue, hookFunc] = useState('none');

    axios.get("http://localhost:3002/room")
    .then(data => {
      console.log(data.data)
      hookFunc(data.data);
      });

      console.log(hookValue);

      return (
          <>
          <div>테스트 페이지 입니다. 콘솔로그를 확인해주세요.</div>
          </>
      );

});

export default TestArea;