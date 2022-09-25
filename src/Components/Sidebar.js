import close from "../Images/icon-close.svg";
import {useState} from "react";

export default function Sidebar({opennav}){
    const [nav, setNav] = useState(opennav)
    console.log(nav)
    console.log(opennav);
    return (
      <>
        <div
          className={
            "absolute lg:hidden top-0 left-0 w-[40vw] h-[80vw] bg-blue-600 p-10 pl-20 text-[#68707d] fixed" +
            (nav ? " " : " hidden")
          }
        >
          <div className="bg-white h-6 w-6" onClick={() => setNav(!opennav)}>
            <img className="mt-6" alt="close" src={close} />
          </div>

          <h2 className="mt-20 text-4xl font-semibold text-white">
            I am a sidebar
          </h2>
        </div>
      </>
    );
}