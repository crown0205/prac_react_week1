import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const Review = props => {
  const history = useHistory();
  const url_value = useParams();
  const [star_num, setStar_num] = React.useState(0);
  console.log("star_num", star_num);
  // console.log("setStar : ", setStar_num);
  // console.log(history)
  // console.log(url_value.day)

  React.useEffect(() => {
    const press = event => {
      console.log("키보드를 누르면 어떤 이벤트가 발생 : ", event);
      // if ([1, 2, 3, 4, 5].indexOf(parseInt(event.key)) !== -1) {
      //   setStar_num(parseInt(event.key));
      // }
    };
    window.addEventListener("keydown", press);

    return () => window.removeEventListener("keydown", press);
  }, []);

  return (
    <div>
      <h2>
        <span>{url_value.day}요일</span> 평점남기기
      </h2>
      <hr />
      <ItemStyle>
        {Array.from({ length: 5 }, (item, index) => {
          // console.log("from_index : ",index)
          return (
            <AiFillStar
              key={index}
              style={{
                fontSize: "36px",
                color: star_num < index + 1 ? "#aaa" : "#f2b600",
              }}
              onClick={() => {
                setStar_num(index + 1);
              }}
            />
          );
        })}
      </ItemStyle>
      <button
        style={{
          padding: "14px 12px",
          background: "#ffe8b7",
          outline: "none",
          border: "none",
          borderRadius: "10px",
          boxShadow: "1px 1px 1px gray",
        }}
        onClick={() => {
          history.push("/");
        }}
      >
        평점 남기기
      </button>
    </div>
  );
};

const ItemStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 6px 14px;
  margin: 40px auto 40px;
  width: 90%;
  height: 70px;
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 1px 1px 2px #9d9d9d;
`;

export default Review;
