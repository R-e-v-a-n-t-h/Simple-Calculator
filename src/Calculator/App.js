import React from 'react'
import TextBox from './TextBox'
import Button from './Button'
import './app.css'
function App() {
    return (
    <>
    <h1>SIMPLE CALCULATOR</h1>
    <div id='topmost'>
        <div id='calculator'>
            < div id='innerCal'>    
            <TextBox></TextBox>
            <Button></Button>
            </div>
        </div>
    </div>
    </>
    )
}

export default App
