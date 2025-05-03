
export default function ContactForm(){


    return(
        <>
        <div className="text-[#E6D8C7] text-6xl font-bold pb-10">let's get in touch</div>
        <form className="contact-form text-[#E6D8C7] text-[27px] font-thin">
            <label className="font-semibold text-4xl my-[10px]">NAME</label>
            <input type="text" 
                placeholder ="Jon Doe" 
                className="contact border w-md h-15 rounded-lg focus: outline-none focus:border-[#A6D8C7] px-4 pt-1"/>

            <label className="font-semibold text-4xl my-[10px]">EMAIL</label>
            <input type="text" 
                placeholder ="jon@gmail.com" 
                className="contact border w-md h-15 rounded-lg focus: outline-none focus:border-[#A6D8C7] px-4 pt-1"/>

            <label className="font-semibold text-4xl my-[10px]">YOUR MESSAGE</label>
            <textarea 
                placeholder ="Write something.." 
                rows="4"
                cols="10"
                maxlength="350"
                className="contact border rounded-lg focus: outline-none focus:border-[#A6D8C7] px-3 py-3 pt-2"/>
            <button className="font-semibold text-4xl my-[10px] cursor-pointer">SEND</button>

        </form>
        </>

    )
}