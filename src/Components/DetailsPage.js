import React from 'react';
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const { post } = useSelector((state) => state.detailsCard);
  
  if(!post){
    return <h1>Loading...</h1>
  }
  
  return (
    <div className='container-2'>
      <div className='main-div-2'>
        <h2>Details Page For Post With ID {post.id}</h2>
        <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
        <p>User ID: {post.userId}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
      </div>
    </div>
  )
}

export default DetailsPage;
