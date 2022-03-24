import React from "react";
import { AiFillCaretRight, AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


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
    <div>
      <h1>내 일주일은?</h1>
      <hr />
      {random_num.map(({day, num}, index) => {
        //  day_list에서 요일의 값(day)을 가져와 length 만큼 가져와 나열해준다.
        // console.log("day : ", day);
        // console.log("num : ", day.num);
        // console.log("index : ", index);

        return (
          <ItemStyle
            key={`days_${index}`} // 순번을 key값으로 넣어줌.
          >
            <p>{day}요일</p>
            {Array.from({ length: 5 }, (item, star_index) => {
            
              return (
                <AiFillStar
                  key={star_index}
                  style={{
                    fontSize: "34px",
                    color: num < star_index ? "#aaa" : "#f2b600",
                  }}        
                />
              );
            })}

            <AiFillCaretRight
              style={{ fontSize: "28px" }}
              onClick={() => {
                history.push("/review/" + day);
              }}
            />
          </ItemStyle>
        );
      })}
    </div>
  );
};

const ItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 14px;
  margin: 8px auto;
  width: 90%;
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 1px 1px 2px #eee;

  p {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
  }
`;

export default Main;
