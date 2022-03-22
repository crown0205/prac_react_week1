import React from "react";
import { AiFillCaretRight, AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const Main = props => {
  const day_list = ["일", "월", "화", "수", "목", "금", "토"];
  const wrap_style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    aligItems: "center",
  };

  // 궁금증 테스트 console.log 값
  console.log(typeof day_list);
  console.log("day_list : ", day_list);
  console.log("Objest.key : ", Object.keys(day_list));
  console.log(
    "Object.kety.map : ",
    Object.keys(day_list).map((item, index) => day_list[item])
  );

  return (
    // <ListStyle>
      <div style={{margin:"20px auto",
      //  background:"#aaa"
        }}>

        <h1>내 일주일은?</h1>

        <hr/>

        {day_list.map((day, index) => {
          //  day_list에서 요일의 값(day)을 가져와 length 만큼 가져와 나열해준다.
          return (

            <div key={index // 순번을 key값으로 넣어줌.
              } style={{width:"80%", margin:"auto", display:"flex", justifyContent:"space-between", alignItems: "center"}}>
              <p style={{fontSize:"20px", fontWeight:"bold", letterSpacing:"2px"}} >{day}요일</p>
              {Array.from({ length: 5 }, (item, index) => {
                return <AiFillStar key={index} style={{color:"gray", fontSize:"34px"}}/>;
              })}
              <AiFillCaretRight style={{fontSize:"28px"}}/>
            </div>

          );
        })}
      </div>
    // </ListStyle>
  );
};

export default Main;

// const ListStyle = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   background-color: gray;
// `