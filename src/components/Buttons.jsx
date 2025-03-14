export default function Buttons ({ subText, text, link, name}) {
    return(
        <button 
            className= {`buttons bg-[#1d1d34] border-3 border-[#E6D8C7] text-black font-bold rounded-[35px] ${name}`}
            onClick = {()=> window.open(link, '_blank')}
        >
            <h2 className="buttonSubText text-white text-2xl opacity-40">{subText}</h2>
            <h1 className="buttonText text-[#E6D8C7] text-4xl">{text}</h1>
        </button>
    )
}