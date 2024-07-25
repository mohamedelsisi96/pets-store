import React, { useEffect, useState } from 'react'
const localCash={}
export default function useBreads(animal) {
const [myBreads,setMyBreads]=useState([])
const [err,setErr]=useState("")
const [load,setLoad]=useState()
useEffect(()=>{
    if(!animal){
        setMyBreads([])  
    }else if(localCash[animal]){
        setMyBreads(localCash[animal])
        
    }else{
        getMybreads(animal)
    }
   
},[animal])
async function getMybreads(animal) {
    try{
        setLoad(true)
        setErr("")
        const response = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`)
        const data = await response.json()
        localCash[animal]=data.breeds||[]
        setMyBreads(data.breeds||[])
    }
    catch(error){
        setErr(error.message)
    }
    finally{
        setLoad(false)
    }
  
}
return [myBreads,err,load]
}
