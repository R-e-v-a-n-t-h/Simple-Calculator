import React from 'react'
import './button.css'

function Button() {
const buttonsArrayRow1= [["Clear",'danger','clear'],['=','success','equal']]
const buttonsArrayRow2= [[9,'dark','9'],[8,'dark','8'],[7,'dark','7'],['/','warning','divide']]
const buttonsArrayRow3= [[6,'dark','6'],[5,'dark','5'],[4,'dark','4'],['x','warning','multiply']]
const buttonsArrayRow4= [[3,'dark','3'],[2,'dark','2'],[1,'dark','1'],['-','warning','minus']]
const buttonsArrayRow5= [['.','primary','dot'],[0,'dark','0'],['%','primary','percent'],['+','warning','plus']]

    return (
        <div className="buttonsContainer">
            <div className='buttons1'>
            {buttonsArrayRow1.map((x)=>{return(<button className={'btn btn-'+x[1]} id={x[2]+'btn'}>{x[0]}</button>)})}
            </div>

            <div className='buttons2'>
            {buttonsArrayRow2.map((x)=>{return(<button className={'btn btn-'+x[1]} id={x[2]+'btn'}>{x[0]}</button>)})}
            </div>

            <div className='buttons2'>
            {buttonsArrayRow3.map((x)=>{return(<button className={'btn btn-'+x[1]} id={x[2]+'btn'}>{x[0]}</button>)})}
            </div>

            <div className='buttons2'>
            {buttonsArrayRow4.map((x)=>{return(<button className={'btn btn-'+x[1]} id={x[2]+'btn'}>{x[0]}</button>)})}
            </div>

            <div className='buttons2'>
            {buttonsArrayRow5.map((x)=>{return(<button className={'btn btn-'+x[1]} id={x[2]+'btn'}>{x[0]}</button>)})}
            </div>
        </div>
    )
}

export default Button
