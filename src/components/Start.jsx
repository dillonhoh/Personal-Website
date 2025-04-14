import { useState } from "react";

export default function Start() {

    const textimageArray = [
        {text: "Software Engineer", 
        image: "../src/assets/softwareengineer.jpg"
        }, 
        {text: "Tailor",
        image: "../src/assets/photographer.jpg"
        }, 
        {text: "Dancer", 
        image: "../src/assets/dancer.jpg"
        },
        {text: "Snowboarder", 
        image: "../src/assets/snowboarder.jpg"
        },
        ];



const [selectedIndex, setSelectedIndex] = useState(5)
const [styleChose, setStyleChosen] = useState(false)

const handleClick = (clickedIndex) => {
    if (clickedIndex == selectedIndex) {
        setStyleChosen(false);
        setSelectedIndex(5);
        return
    }
    setSelectedIndex(clickedIndex);
}

    return(
        <>
            <div className="flex items-center mt-[125px] w-6xl justify-between">
                <div className="flex" >
                    <img 
                    key={selectedIndex}
                    src={textimageArray[selectedIndex] ? textimageArray[selectedIndex].image : "../src/assets/dillon.jpg"} 
                    alt="startPhoto"
                    className={`start-picture h-[375px] ${ textimageArray[selectedIndex] ? 'active-picture' : ''} opacity-95`}/>
                </div>

                <div className="start-text flex-col text-right">
                    <div className="text-6xl text-[#E6D8C7] font-semibold">Hey! I'm Dillon Ho</div>
                    <div className="text-base text-[#E6D8C7] text-center">thanks for checking this out</div>
                    <hr className="my-1 border-[#E6D8C7] border-t-2" />
                    <hr className="my-1 border-[#E6D8C7] border-t-2" />
                    {textimageArray.map((item, index) => (
                        <div
                            key={index}
                            className={`text-item ${selectedIndex === index ? 'active' : ''} text-[#E6D8C7] text-xl font-semibold opacity-[50%]`}
                            onClick = {() => handleClick(index)}
                            >
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}