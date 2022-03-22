import React from "react";
import { AiFillCaretRight, AiFillStar } from "react-icons/ai";
import { useHistory } from "react-router-dom";
// import styled from "styled-components";

const Main = props => {
  const day_list = ["일", "월", "화", "수", "목", "금", "토"];
  const history = useHistory();

  // 궁금증 테스트 console.log 값
  // console.log(typeof day_list);
  // console.log("day_list : ", day_list);
  // console.log("Objest.key : ", Object.keys(day_list));
  // console.log(
  //   "Object.kety.map : ",
  //   Object.keys(day_list).map((item, index) => day_list[item])
  // );

  const random_num = day_list.map((요일, idx) => {
    return {
      day: 요일,
      num: Math.floor(Math.random() * 5) + 1, 
    };
  });

  return (
    // <ListStyle>
    <div
      style={{
        margin: "20px auto",
        //  background:"#aaa"
      }}>
      <h1>내 일주일은?</h1>
      <hr />
      {random_num.map((day, index) => {
        //  day_list에서 요일의 값(day)을 가져와 length 만큼 가져와 나열해준다.
        // console.log("day : ", day);
        // console.log("num : ", day.num);
        // console.log("index : ", index);
        
        return (
          <div
            key={`days_${index}`} // 순번을 key값으로 넣어줌.
            style={{
              width: "80%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              {day.day}요일
            </p>

            {Array.from({ length: 5 }, (item, star_index) => {
              console.log("별 : ",star_index)
              console.log("랜덤숫자 : ",day.num)
              return (
                <AiFillStar
                  key={star_index}
                  style={{ fontSize: "34px", 
                  color: day.num < star_index ? "#aaa" :  "#f2b600"}}
                />
              );
            })}

            <AiFillCaretRight
              style={{ fontSize: "28px" }}
              onClick={() => {
                history.push("/review/" + day.day);
              }}
            />
          </div>
        );
      })}
    </div>
    // </ListStyle>
  );
};

// 랜덤 기능 구현...
// 평점 남기기 구현

export default Main;

// const ListStyle = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   background-color: gray;
// `