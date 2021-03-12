import React,{useState,useEffect, useRef, useReducer, useContext} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import App from './Calculator/App'
ReactDOM.render(<App></App>,document.getElementById('root'))
if (module.hot) {
    module.hot.accept();
  }

var answer=0;
let op=''

function doMath(num,operator){
  switch(operator){
    case '+':answer+=num
              break;
    case '-':answer-=num;
              break;
    case 'x': answer*=num;
              break;
    case '/': answer/=num;
              break;
    case '%': answer=(answer/100)*num
              break;
  }
}

$('#clearbtn').click(()=>{
  $('#textDisplay').val('');
  answer=0;
})

$('#1btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'1');
})
$('#2btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'2');
})
$('#3btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'3');
})
$('#4btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'4');
})
$('#5btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'5');
})
$('#6btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'6');
})
$('#7btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'7');
})
$('#8btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'8');
})
$('#9btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'9');
})
$('#0btn').click(()=>{
  if($('#textDisplay').val().length!=15)
  $('#textDisplay').val($('#textDisplay').val()+'0');
})


$('#dotbtn').click(()=>{
  if($('#textDisplay').val().length!=15){
  if($('#textDisplay').val()=='')
    $('#textDisplay').val($('#textDisplay').val()+'0.');

  else if($('#textDisplay').val().indexOf('.')==-1)
    $('#textDisplay').val($('#textDisplay').val()+'.');
  }
})

$('#equalbtn').click(()=>{
  if(op!='')
  {
    doMath(Number($('#textDisplay').val()),op)
    $('#textDisplay').val(answer)
    op=''
  }

})

$('#plusbtn').click(()=>{
  operate('+')
})
$('#minusbtn').click(()=>{
  operate('-')
})
$('#multiplybtn').click(()=>{
  operate('x')
})
$('#dividebtn').click(()=>{
  operate('/')
})
$('#percentbtn').click(()=>{
  operate('%')
})

function operate(operator){
  if(op=='')
  {
    op=operator
    answer=Number($('#textDisplay').val())
    $('#textDisplay').val('')
  }
  else{
    doMath(Number($('#textDisplay').val()),op)
    $('#textDisplay').val('')
    op=operator;
  }
}