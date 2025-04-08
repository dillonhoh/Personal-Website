
export default function ContactForm(){


    return(
        <form className="contact-form text-[#E6D8C7] font-semibold text-4xl">
            <label>NAME</label>
            <input type="text" 
                placeholder ="Jon Doe" 
                className="contact border rounded-lg focus: outline-none focus:border-[#A6D8C7] px-3 py-2 pt-1"/>

            <label>EMAIL</label>
            <input type="text" 
                placeholder ="jon@gmail.com" 
                className="contact border rounded-lg focus: outline-none focus:border-[#A6D8C7] px-3 py-2 pt-1"/>

            <label>YOUR MESSAGE</label>
            <textarea 
                placeholder ="Write something.." 
                rows="4"
                cols="10"
                maxlength="350"
                className="contact border rounded-lg focus: outline-none focus:border-[#A6D8C7] px-3 py-3 pt-2"/>
            <button>SEND</button>

        </form>

    )
}