import { useState } from 'react'

export default function LifeWheel() {
    
    const textArray = [
        {text: "I'm a Photographer",
        image: "../src/assets/photographer.jpg"
        }, 
        {text: "I'm a Dancer", 
        image: "../src/assets/dancer.jpg"
        }, 
        {text: "I'm   Dillon", 
        image: "../src/assets/dillon.jpg"
        },
        {text: "I'm a Software Engineer", 
        image: "../src/assets/softwareengineer.jpg"
        }, 
        {text: "I'm a Snowboarder", 
        image: "../src/assets/snowboarder.jpg"
        }];
  
    const [currentIndex, setCurrentIndex] = useState(2);
    const handleClick = (clickedIndex) => {
      setCurrentIndex(clickedIndex);
    }

    return(
    <>
        <div className="image-container">
        <img className="main-image" src={textArray[currentIndex].image} alt={textArray[currentIndex].text}/>        
        </div>
        <div className="wheel-container">
            <div className="wheel-text">
                    {/* Previous items */}
                <div className="wheel-item" onClick={() => handleClick((currentIndex + 3) % textArray.length)}>
                    {textArray[(currentIndex + 3) % textArray.length].text}</div>

                <div className="wheel-item" onClick={() => handleClick((currentIndex + 4) % textArray.length)}>
                    {textArray[(currentIndex + 4) % textArray.length].text}</div>
                
                    {/* Main item */}
                <div className="main-text">{textArray[currentIndex].text}
                    </div>

                    {/* Next items */}
                <div className="wheel-item" onClick={() => handleClick((currentIndex + 1) % textArray.length)}>
                    {textArray[(currentIndex + 1) % textArray.length].text}</div>

                <div className="wheel-item" onClick={() => handleClick((currentIndex + 2) % textArray.length)}>
                    {textArray[(currentIndex + 2) % textArray.length].text}</div>
            </div>
        </div>
    </>
    )
}