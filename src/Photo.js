import React,{useState} from 'react'
import'./Photo.css';
import './App.css'
import Data from './Data';
const Photo = () => {

    const [items, setItems] =  useState(Data);

    const filterItem = (categItem) =>{
        const updatedItems = Data.filter((curElem) =>{
             return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
    return (
        <>
        <div className="photo component__space" id="Photo">
            <div className="photos__nav">
            <h1 className="h1__5">PHOTOS

            </h1>
            
            <div className="icons1">
            <button className="about btn2 pointer" onClick={() => setItems(Data)}>    ALL</button>
            <button className="about btn2 pointer" onClick={() => filterItem('ART') }>    ART</button>
        
           
            <button className="about btn2 pointer" onClick={() => filterItem('TRAVELLING') }>  TRAVELLING</button>
            <button className="about btn2 pointer" onClick={() => filterItem('PHOTOGRAPHY') }> PHOTOGRAPHY</button>
            <button className="about btn2 pointer" onClick={() => filterItem('PETS') }> PETS</button>
            <button className="about btn2 pointer" onClick={() => filterItem('ACHIEVEMENTS') }>  ACHIEVEMENTS</button>
            </div>
            </div>
        {/*photo items section*/}
            
                 {
                     items.map((elem)  =>{
                            const { image } = elem;

                            return(
                                
                                <div className="photo__img__1">      
                        <div className="items ">                  
                    <img src={image} alt="name"  height={500} width={500} className="photo__img" />
                    
                    </div>
                    
                    </div>
                            )
                 
                        })               
                 }
                
             </div>
    
    </>
    )
}

export default Photo;