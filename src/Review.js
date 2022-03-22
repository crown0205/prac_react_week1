import React from "react";
import { AiFillStar } from "react-icons/ai";


const Review = props => {

  return (
    <div>
      <h2>무슨요일</h2>
      <div>
        {Array.from({length:5}, (item,index)=>{
          return (
            <AiFillStar style={{fontSize:"36px", marginRight:"20px", color:"gray"}}/>
          )
        })}
      </div>
      <button style={{padding:"8px 5px", marginTop:"30px"}}>평점 남기기</button>
    </div>

  )
}

export default Review