import Buttons from './Buttons.jsx'


export default function ButtonMap () {
    return(
        <>
            <div className="button-container grid grid-cols-12 grid-rows-9 w-[1100px] h-[817px] gap-8">
                <Buttons 
                    subText ="i love"
                    text ="clothes"
                    link="https://www.depop.com/mojoh/"
                    name="col-span-3 row-span-3"
                />
                <Buttons 
                    subText ="come look at my"
                    text ="projects"
                    link="https://github.com/dillonhoh?tab=repositories"
                    name="col-span-6 row-span-3"
                    />
                <Buttons 
                    subText ="i'm based in"
                    text ="los angeles & riverside, ca"
                    link="https://www.google.ca/maps/place/Los+Angeles,+CA/@34.0200393,-118.7413578,10z/data=!3m1!4b1!4m6!3m5!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0549076!4d-118.242643!16s%2Fm%2F030qb3t?entry=ttu&g_ep=EgoyMDI1MDMwOC4wIKXMDSoASAFQAw%3D%3D"
                    name="col-span-3 row-span-3"
                    />
            
                <Buttons 
                    subText ="marlan and rosemary"
                    text ="bourns college of engineering"
                    link="https://www.engr.ucr.edu/"
                    name="col-span-4 row-span-3"
                    />
                <Buttons 
                    subText ="review my"
                    text ="resume"
                    link="/ResumeDillon2024.pdf"
                    name="col-span-4 row-span-3"
                    />
                <Buttons 
                    subText ="watch my "
                    text ="dance videos"
                    link="https://youtube.com/playlist?list=PL8vo5HJwlvg8q7N25C-Zb81IDvgf8AybB&si=R3-s1oV9yXxfDne-"
                    name="col-span-4 row-span-3"
                    />
                <Buttons 
                    subText ="let's connect on"
                    text ="linkedIn"
                    link="https://www.linkedin.com/in/dillonhoh/"
                    name="col-span-6 row-span-3"
                    />
                <Buttons 
                    subText ="and this is my"
                    text ="github"
                    link="https://github.com/dillonhoh"
                    name="col-span-6 row-span-3"
                    />
            </div>
          </>
    )
}