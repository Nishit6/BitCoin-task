import React, {useState,Fragment}from 'react'
import {Card, Button } from 'react-bootstrap'
import './Bitcoin.css'


export default function Bitcoin() {

    const [inputVal, setInputVal] = useState('')
    const [blueColor, setBlueColor] = useState(true)
    const [bitCoinPrice, setBitCoinPrice] = useState('')
    const [previousPrice, setPreviousPrice] = useState([])
    const [showPreviousPrice, setShowPreviousPrice] = useState(false)

const inputHandler = (e)=>{
    setInputVal(e.target.value)
    setPreviousPrice({...previousPrice, bitCoinPrice})
}

    const buttonHandler = ()=>{
        if(inputVal.length < 0){
return
        }
      setBitCoinPrice(inputVal)
      setInputVal('')
    }

const colorChangeHandler = () =>{
    setBlueColor(!blueColor)
}

const prevPriceHandler = ()=>{
 setShowPreviousPrice(!showPreviousPrice)
}


  return (
    <Fragment>
        <h2>BitCoin Price</h2>
        <div className='container'>
      
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title className={blueColor ? 'title-blue' : 'title-purple'} >{bitCoinPrice.length > 0 ? "current price: " + bitCoinPrice : 'please add price'}</Card.Title>
      <Card.Title >{showPreviousPrice && "previous price: " + JSON.stringify(previousPrice.bitCoinPrice) }</Card.Title>
      <input value={inputVal} type='text' required={true} onChange={inputHandler}/>
      {bitCoinPrice.length > 0 ?  <Button onClick={buttonHandler} className='mb-3 mt-3' variant="success">Refresh Bitcoin Price</Button> :    <Button onClick={buttonHandler} className='mb-3 mt-3' variant="warning">get Bitcoin Price</Button> }

      <Button onClick={colorChangeHandler} className='mb-3' variant="secondary">change color</Button>

      <Button onClick={prevPriceHandler} className='mb-3 mt-3' variant="info">get Previous price</Button>
   
    </Card.Body>
  </Card>
  </div>
  </Fragment>
  )
  
}
