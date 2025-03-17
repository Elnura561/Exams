const API='https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7'
let container=document.getElementById('container')
let box=document.getElementById('box')
let button=document.getElementById('btn')
let result=document.getElementById('result')


async function getAPI(){
    try{
        const response=await fetch(API)
    const data=await response.json()
    console.log('деректер орындалуда:',data)
 
        }catch(error){ 
        console.log('деректер сатты алынбады:',error)


        
        }
    }

        
   
getAPI()

