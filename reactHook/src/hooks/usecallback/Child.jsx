import React from 'react'

function Child({change}) {
    console.log('child render')
  return (
    <div>
        
        <button onClick={change}>send</button>
        </div>
  )
}
export default React.memo(Child)
