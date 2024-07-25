import React from 'react'

async function fetchPetDetailes({queryKey}) {
    console.log(queryKey);
 let id=queryKey[1];
 let res= await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
 if(!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
//  let data= await res.json();

 return res.json();
}

export default fetchPetDetailes
