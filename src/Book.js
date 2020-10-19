import React from 'react'

const Book = (props)=>{
  const {img, name, author} = props

  const clickHandler = () =>{
    alert("This Book is published by "+ author)
  }

  const logAuthor = ()=>{
    console.log(author);
  }
  return (
    <article className ="book" onMouseOver = {()=>console.log(name)}>
      <img src= {img} alt=""/>
      <h1>{name}</h1> 
      <h4>{author} </h4>
      <button type="button" onClick ={()=>clickHandler()}>Book name</button> 
      <button type="button" onClick ={()=>logAuthor()}>Log Author</button>
    </article>
  )
}

export default Book
