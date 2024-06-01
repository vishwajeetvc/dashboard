import { NavLink, Navigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

export default function Header() {

    const [isopen, setIsOpen] = useState(false)

    return (<>
        <header>
            <nav className="
                bg-[#001d3d] text-white grid 
                grid-rows-[25px_max-content_25px] 
                grid-cols-[24px_1fr_24px]
                md:grid-cols-[1fr_auto_1fr]
                relative
                                ">
                <div className=" 
                    row-start-2 row-end-2 col-start-2  
                    items-center  text-3xl grid grid-cols-2 
                    md:grid-cols-12 md:gap-5 px-5
                    ">
                    <Button label={"olTx"} className={" font-[700] "} />

                    <Button label={"☵"}
                        onClick={setIsOpen}
                        className={"justify-self-end md:hidden"} />

                    <div className="hidden col-start-3  col-end-13  
                        md:grid  md:grid-cols-[max-content_max-content_1fr_max-content]
                        items-center
                        md:gap-10
                        ">
                        <NavLink to="/dashboard">
                            <Button label={"Home"} />
                        </NavLink>
                        <NavLink to="/account" >
                            <Button label={"Account"} />
                        </NavLink>
                        <NavLink to="/dashboard" className={'col-start-4'} >
                            <Button label={"Dashboard"} fat={true} />
                        </NavLink>
                    </div>
                    <div
                        style={{ boxShadow: '-115px 0px 0px rgba(0,0,0,0.5)' }}
                        className={`
                        ${isopen ? '' : 'hidden'}
                        grid grid-cols-[25px_1fr_25px] 
                        grid-rows-[122px_200px_max-content_1fr]
                        absolute w-[250px] h-screen bg-sky-400/85 
                        top-0 right-0 
                        bg-[#003566]  `}>
                        <div className={'col-start-2 row-start-2 flex flex-col relative'} >
                            <NavLink to="/dashboard" className={'col-start-2 row-start-2 p-4'}>
                                <Button label={"Dashboard"} />
                            </NavLink>
                            <NavLink to="/account" className={'col-start-2 row-start-2 p-4'}>
                                <Button label={"Account"} />
                            </NavLink>
                        </div>
                        <span
                            onClick={e => {
                                setIsOpen(!isopen);
                            }}
                            className="col-start-3 row-start-4 fixed bottom-20 right-16">✘</span>
                        <Button className={'col-start-2 row-start-3 text-center '} label={"Dashboard"} fat={true} />
                    </div>
                </div>
            </nav>
        </header>
    </>)
}
