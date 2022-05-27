import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import AWSSfnGraph from '@tshepomgaga/aws-sfn-graph';
import '@tshepomgaga/aws-sfn-graph/index.css';

const sampleData = {
  Comment:
    'A Hello World example of the Amazon States Language using Pass states',
  StartAt: 'Hello',
  States: {
    Hello: {
      Type: 'Pass',
      Result: 'Hello',
      Next: 'World'
    },
    World: {
      Type: 'Pass',
      Result: 'World',
      End: true
    }
  }
}

const App = () => {
  const [aslData, setAslData] = useState(sampleData)
  function handleChange(e) {
	const jsonText = e.target.value
	try {
		const object = JSON.parse(jsonText)
		if (object != null) {
			setAslData(object)
		} else {
			setAslData(sampleData)
		}
	} catch(error) {
		setAslData(sampleData)
	}
  }
  return (
	<>
      <input 
      type="text"
      name="stateMachineJson"
      onChange={ handleChange }  />
      <AWSSfnGraph
        data={aslData}
        width={800}
        height={800}
        onError={console.log}
      />
	</>
  )
}

export default App


// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
