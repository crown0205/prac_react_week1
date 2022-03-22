import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Review = props => {
  const history = useHistory();
  const url_value = useParams();
  const [star_num, setStar_num] = React.useState(0);
  console.log("star_num", star_num);
  // console.log("setStar : ", setStar_num);
  // console.log(history)
  // console.log(url_value.day)

  return (
    <div>
      <h2>{url_value.day}요일</h2>
      <hr />
      <div>
        {Array.from({ length: 5 }, (item, index) => {
          // console.log("from_index : ",index)
          return (
            <AiFillStar
              key={index}
              style={{ fontSize: "36px", marginRight: "20px", color: star_num < index + 1 ? "#aaa" : "#f2b600" }}
              onClick={()=>{
                setStar_num(index + 1)
              }}/>
          );
        })}
      </div>
      <button
        style={{ padding: "8px 5px", marginTop: "30px" }}
        onClick={() => {
          history.push("/");
        }}
      >
        평점 남기기
      </button>
    </div>
  );
};

export default Review;
