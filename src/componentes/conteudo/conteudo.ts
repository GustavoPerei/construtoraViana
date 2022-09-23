import styled from 'styled-components'

export default styled.div`
display: flex;
justify-content: center;
aling-items: center;
height: 600px;
width: 100%;
background-color: #683bb7;
color: #fff;
margin: 15px;
font-size: 4em;
`;

/**{item.map = ((item) =>  (
            <Item key={item}>{item}</Item>
            ))} */



/**import React from 'react'
 import fachada from './fachada.jpeg'
 import recepcao from './recepcao.jpeg'
 import recepcaoFundo from './recepcaoFundo.jpeg'
 import 'bootstrap/dist/css/bootstrap.css'
import './conteudo.css'
import { useState } from 'react'
import  Carousel  from 'react-elastic-carousel'
import Item from './conteudo.ts'
 
 export default function Conteudo() {
   
  const breackpoint = [
      {whidth: 1, itemToShow: 1},
      {whidth: 550, itemToShow: 2, itemToScroll: 2},
      {whidth: 768, itemShow: 3},
      {whidth: 1200, itemShow: 4},
  ]

  const [item, setItem] = useState(1,2,3,4,5,6,7,8)

  const addItem = () =>{
    const nextItem = Math.max(1, item.lenght + 1)
    setItem([...item, nextItem])
  }

  const removeItem = () => {
    const endRange = Math.max(0, item.lenght -1)
    setItem(item.splice(0, endRange))
  }


  
  
  return (
    <div className='container'>
      <div className='controls-wrapper'>
        <button onClick={addItem}>Add item</button>
        <button onClick={removeItem}>Remove</button>
      </div>
      <hr className='separator'></hr>
      <div className='carousel-warapper'>
        <Carousel isRTL breakPoints={breackpoint}>
          <img src={fachada}/>
          <img src={recepcao}/>
        </Carousel>
      </div>
    </div>
   )
 }*/

 /**import  React ,  {  Componente  }  from  'react' ; 
import  Carousel  from  'react-elastic-carousel' ;


function Con() {
class  App  extends  Componente  { 
  state  =  { 
    items : [ 
      { id : 1 ,  title : 'item #1' } , 
      { id : 2 ,  title : 'item #2' } , 
      { id : 3 ,  title : 'item #3 ' } , 
      { id : 4 ,  título : 'item #4' } , 
      { id :5 ,  título : 'item #5' } 
    ] 
  }

  render  ( )  { 
    const  { itens }  =  this . estado ; 
    return  ( 
      <Carousel> 
        { itens . map ( item  =>  < div  key = { item . id } > { item . title } </div> ) } 
      </Carousel> 
    ) 
  } 
  }
}

  export default Con */
  

