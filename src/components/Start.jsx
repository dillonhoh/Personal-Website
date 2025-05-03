import { useState, useEffect } from "react";

export default function Start() {

    const textimageArray = [
        {text: "Software Engineer", 
        image: "../src/assets/swecircle.png"
        }, 
        {text: "Tailor",
        image: "../src/assets/photographer.jpg"
        }, 
        {text: "Dancer", 
        image: "../src/assets/dancercircle.png"
        },
        {text: "Snowboarder", 
        image: "../src/assets/snowboardercircle.png"
        },
        {text: "Dillon", 
            image: "../src/assets/dilloncircle.png"
            },
        ];

const [previousIndex, setPreviousIndex] = useState(3)
const [selectedIndex, setSelectedIndex] = useState(4)
const [styleChosen, setStyleChosen] = useState(false)
const [fadeIn, setFadeIn] = useState(false)

useEffect(() => {
    textimageArray.forEach(item => {
        const img = new Image();
        img.src = item.image;
    });
}, []);

const handleClick = (clickedIndex) => {
    if (clickedIndex == selectedIndex) {
        setPreviousIndex(selectedIndex);
        setFadeIn(true);
        setStyleChosen(false);
        setSelectedIndex(4);
        setTimeout(() => {
            setFadeIn(false);
          }, 400);
        return
    }
    setFadeIn(true);
    setPreviousIndex(selectedIndex);
    setStyleChosen(true);
    setSelectedIndex(clickedIndex);

    setTimeout(() => {
        setFadeIn(false);
      }, 100);
}

    return(
        <>
            <div className="flex items-center mt-[125px] w-6xl justify-evenly caret-transparent ml-[-95px]">
                <div className="relative" >
                    <img 
                    key={previousIndex}
                    src={textimageArray[previousIndex].image} 
                    alt={textimageArray[previousIndex].text} 
                    className={`absolute previous-picture h-[425px] ${fadeIn ? "in-transition" : "" }`}/>
                    
                    <img 
                    key={selectedIndex}
                    src={textimageArray[selectedIndex].image} 
                    alt={textimageArray[selectedIndex].text} 
                    className={`active-picture h-[425px] ${fadeIn ? "in-transition" : "" }`}/>
                    
                </div>

                <div className="start-text flex-col text-right">
                    <div className="text-6xl text-[#E6D8C7] font-semibold">Hey! I'm Dillon Ho</div>
                    <div className="text-base text-[#E6D8C7] text-center font-light">thanks for checking this out</div>
                    <hr className="my-1 border-[#E6D8C7] border-t-2" />
                    <hr className="my-1 border-[#E6D8C7] border-t-2" />
                    <div className="styles-container">
                    <hr className="my-1 border-[transparent" />
                    {textimageArray.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className={`text-item ${selectedIndex === index ? 'active' : ''} text-[#E6D8C7] text-xl font-semibold opacity-[50%] cursor-pointer mt-[3px]`}
                            onClick = {() => handleClick(index)}
                            >
                            {item.text}
                        </div>
                    ))}
                    </div>
                    <div className={`${styleChosen == true ? 'blinkingStopped' : 'blinkingActive'} text-center text-sm `}>select a style</div>
                </div>

            </div>
        </>

    )
}