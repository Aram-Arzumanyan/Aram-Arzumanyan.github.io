import React from 'react';
import './style.scss';



export default function RoomBlock(props) {
    let item=props.item
  return (
    <div className='room_block'>
        <div className='bg' style={{backgroundImage:`url('${item.img}')`}}></div>
        <h3>{item.h3}</h3>
        <span>{item.sp}</span>
        <p>{item.p1}</p>
        <p>{item.p2}</p>
        <div><span className={item.i1}>  </span><span className={item.i2}>  </span><span className={item.i3}>  </span><span className={item.i4}>  </span><span className={item.i5}>  </span><span className={item.i6}>  </span></div>
        <button className='btn'>Choose Room</button>
    </div>
  )
}
