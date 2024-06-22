import React from 'react'
import { useSelector } from 'react-redux'

export default function News() {
    const {currentUser} = useSelector((state) => state.user)
  return (

    <div>News</div>
  )
}
