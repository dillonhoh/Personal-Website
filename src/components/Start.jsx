import { useState } from "react";

export default function Start() {

    const textimageArray = [
        {text: "I'm a Tailor",
        image: "../src/assets/photographer.jpg"
        }, 
        {text: "I'm a Dancer", 
        image: "../src/assets/dancer.jpg"
        },
        {text: "I'm a Software Engineer", 
        image: "../src/assets/softwareengineer.jpg"
        }, 
        {text: "I'm a Snowboarder", 
        image: "../src/assets/snowboarder.jpg"
        }];



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
        <div>
            <div className="text-4xl text-[#E6D8C7] font-semibold">Hey! I'm Dillon Ho</div>
            <div className="text-xl text-[#E6D8C7]">select a style</div>
            {textimageArray.map((item, index) => (
                <div
                    key={index}
                    className={`text-item ${selectedIndex === index ? 'active' : ''}`}
                    onClick = {() => handleClick(index)}
                    >
                    {item.text}
                </div>
            ))}
        </div>

    )
}