import { NavLink } from "react-router-dom"

function FormButton({ label }) {
    return (<>
        <span className=" bg-[#003566] text-[18px] w-full text-white text-center px-3 py-2 rounded-full">{label}</span>
    </>)
}

export function Card({ children }) {
    return (<div className="
    p-5  rounded-xl
    flex flex-col gap-5 justify-center items-center
    md:shadow-[0px_0px_15px_rgba(0,0,0,.1)]
    md:p-10
    md:w-[400px]
    ">
        {children}
    </div>)
}

export default function Account() {
    return (<div className="
        grid grid-rows-[25px_max-content_25px]
        grid-cols-[25px_1fr_25px]
        ">
        <div className="
            col-start-2 col-end-3
            row-start-2 row-end-3
            md:flex justify-center 
            md:pt-[100px]
            ">
            <Card >
                <img
                    className="w-[150px] rounded"
                    src="./img.png" alt="" />

                <NavLink className={"w-full flex"} to="/login">
                    <FormButton label="Login" />
                </NavLink>

                <NavLink className={"w-full flex"} to="/signup">
                    <FormButton label="Signup"  />
                </NavLink>


            </Card>

        </div>
    </div>)
}
