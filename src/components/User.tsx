import React from 'react'



const User = (props: {name: string; age: number}) => {
  return (
    <div>
    <p>Name: {props.name}  and Age: {props.age}</p>

    </div>
  )
}

export default User