import React,{useState,useEffect} from 'react'
import './App.css'
const getLocalList=()=>{
    let localop=localStorage.getItem('localop')

    if(localop){
        return JSON.parse(localStorage.getItem('localop'));
    }else{
        return [];
    }
}
const MainTo = () => {
   

    const[userName,setuserName]=useState('')
 const[items,setitems]=useState(getLocalList())

 
 const addItem=()=>{
     if(!userName){

     }else{
         setitems([... items,userName])
         setuserName('')
     }
 }

 const removeItem=(id)=>{
      const deltedItems=items.filter((koi,ind)=>{
          return ind !==id;
      })
      setitems(deltedItems)
 }
 useEffect(() => {
     localStorage.setItem("localop",JSON.stringify(items))
 }, [items])
    return (
  
    <>
    <div className='mainDiv'>
        <h2>Welcome</h2>
        <div className='childDiv'>
            <figure>
                <h4 className='text'>To Do List 😀</h4>
            </figure>
            <input type='text'placeholder='Enter Your Item'id='input'
            value={userName} onChange={(e)=>setuserName(e.target.value)}
            />
            <i className="fa-solid fa-plus"id='icon'onClick={addItem}></i>
         
            
            <div className='si'>
                {
                   
                items.map((koi,ind)=>{
                    return(
                    <h3 key={ind}>{koi}    <i className="fa fa-trash"id='reicon'onClick={()=>removeItem(ind)}></i></h3>
                    )
                })
                    
                }
               
            </div>
        </div>
    </div>
    </>
  )
}

export default MainTo