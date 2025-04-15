import { useState } from "react";

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
        ];



const [selectedIndex, setSelectedIndex] = useState(5)
const [styleChosen, setStyleChosen] = useState(false)

const handleClick = (clickedIndex) => {
    if (clickedIndex == selectedIndex) {
        setStyleChosen(false);
        setSelectedIndex(5);
        return
    }
    setStyleChosen(true);
    setSelectedIndex(clickedIndex);
}

    return(
        <>
            <div className="flex items-center mt-[125px] w-6xl justify-evenly caret-transparent ml-[-95px]">
                <div className="flex" >
                    <img 
                    key={selectedIndex}
                    src={textimageArray[selectedIndex] ? textimageArray[selectedIndex].image : "../src/assets/dilloncircle.png"} 
                    alt="startPhoto"
                    className={`start-picture h-[425px] ${ textimageArray[selectedIndex] ? 'active-picture' : ''} opacity-90`}/>
                </div>

                <div className="start-text flex-col text-right">
                    <div className="text-6xl text-[#E6D8C7] font-semibold">Hey! I'm Dillon Ho</div>
                    <div className="text-base text-[#E6D8C7] text-center font-light">thanks for checking this out</div>
                    <hr className="my-1 border-[#E6D8C7] border-t-2" />
                    <hr className="my-1 border-[#E6D8C7] border-t-2" />
                    <div className="styles-container">
                    <hr className="my-1 border-[transparent" />
                    {textimageArray.map((item, index) => (
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