import React from 'react'
import { useSelector } from 'react-redux'

export default function Vlogs() {
    const {currentUser} = useSelector((state)=> state.user);
  return (
    <div>Vlogs</div>
  )
}
