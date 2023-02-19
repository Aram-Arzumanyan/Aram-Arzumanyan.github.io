import { useState } from "react";

export default function(){
    const[error,setError]=useState('');
    
    let regDate =/^\d{4}-\d{2}-\d{2}$/;
    let regEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    function validate(val,type){
        if(!regDate.test(val)&& type==='date'){
            setError('error')
            
        }else if(regDate.test(val)&& type==='date'){
            setError('')
           
        }else if (!regEmail.test(val)&& type==='email'){
            setError('error')
        }else if(regEmail.test(val)&& type==='email'){
            setError('')
        }
    }
    return[error,validate]
}