import React from 'react'

const BackButton = props => {

  function goBack() {
    window.history.back()
  }

  function handleClick(e) {
    goBack()
  }

  return (
    <button onClick={handleClick}>Back</button>
  )
}

export default BackButton
