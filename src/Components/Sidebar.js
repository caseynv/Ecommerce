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
                "absolute lg:hidden top-0 left-0 w-[40vw] h-[80vw] bg-white p-10 pl-20 text-[#68707d] fixed" +
                (nav ? " " : " hidden")
            }>
                <div className="bg-white h-6 w-6" onClick={() => setNav(!opennav)}>
                    <img className="mt-6" alt="close" src={close} />
                </div>

                <h2 className="mt-10 flex flex-col text-l font-semibold text-white">
                    <a
                        className="py-4 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                        href="#">
                        <span className="ml-2 text-[#68707d]">Collections</span>
                    </a>
                    <a
                        className="py-4 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                        href="#">
                        <span className="ml-2 text-[#68707d]">Men</span>
                    </a>
                    <a
                        className="py-4 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                        href="#">
                        <span className="ml-2 text-[#68707d]">Women</span>
                    </a>
                    <a
                        className="py-4 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                        href="#">
                        <span className="ml-2 text-[#68707d]">About</span>
                    </a>
                    <a
                        className="py-4 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                        href="#">
                        <span className="ml-2 text-[#68707d]">Contact</span>
                    </a>
                </h2>
            </div>
        </>
    );
}