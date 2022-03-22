import React from "react";
import { useParams } from "react-router-dom"
import { AiFillStar } from "react-icons/ai";


const Review = props => {

  const url_value = useParams();
  // console.log(url_value.day)

  return (
    <div>
      <h2>{url_value.day}요일</h2>
      <div>
        {Array.from({length:5}, (item,index)=>{
          return (
            <AiFillStar key={index} style={{fontSize:"36px", marginRight:"20px", color:"gray"}}/>
          )
        })}
      </div>
      <button style={{padding:"8px 5px", marginTop:"30px"}}>평점 남기기</button>
    </div>

  )
}

export default Review