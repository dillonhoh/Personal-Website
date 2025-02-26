import { useState, useRef, useEffect} from 'react'

export default function LifeWheel() {
    
    const textArray = [
        {text: "I'm a Photographer",
        image: "../src/assets/photographer.jpg"
        }, 
        {text: "I'm a Dancer", 
        image: "../src/assets/dancer.jpg"
        }, 
        {text: "I'm Dillon", 
        image: "../src/assets/dillon.jpg"
        },
        {text: "I'm a Software Engineer", 
        image: "../src/assets/softwareengineer.jpg"
        }, 
        {text: "I'm a Snowboarder", 
        image: "../src/assets/snowboarder.jpg"
        }];
  
    const [currentIndex, setCurrentIndex] = useState(2);
    const [previousIndex, setPreviousIndex] = useState(1);

    const handleClick = (clickedIndex) => {
        if (clickedIndex === currentIndex) return;
        
        setPreviousIndex(currentIndex);
        setCurrentIndex(clickedIndex);
        
    };
    
    
    return(
    <>
    <div className="life-wheel">
        <span className="image-container">
            <img className="active"
                key={textArray[currentIndex].text}
                src={textArray[currentIndex].image} 
                alt={textArray[currentIndex].text}/>      

            <img
                className="previous"
                key={textArray[previousIndex].text}
                src={textArray[previousIndex].image}
                alt={textArray[previousIndex].text}/>  
        </span>
        
        <span className="wheel-container">
            {textArray.map((item, index) => {
                    const distance = (index - currentIndex + textArray.length) % textArray.length;
                    const className = `wheel-item wheel-item-${distance}`;
                    return (
                        <div
                            key={index}
                            className={className}
                            onClick={() => handleClick(index)}
                        >
                            {item.text}
                        </div>
                    );
                })}
        </span>
    </div>
    </>
    )
}