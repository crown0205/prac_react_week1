import React from "react";
import { AiFillCaretRight, AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Main = props => {
  const day_list = ["일", "월", "화", "수", "목", "금", "토"];
  const history = useHistory();

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

        return (
          <ItemStyle key={`days_${index}`}>
            <p>{day}요일</p>
            {Array.from({ length: 5 }, (item, star_index) => {
              return (
                <AiFillStar
                  key={star_index}
                  style={{
                    fontSize: "34px",
                    color: num < star_index ? "#aaa" : "#f2b600",
                  }}/>
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
