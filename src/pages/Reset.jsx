import Button from "../components/Button";
import { useState } from "react";
import { Card } from "./Account";
import { NavLink } from "react-router-dom";

function FormInput({ label, type, value, onChange }) {
    return (<>
        <input onChange={onChange} className="border px-4 py-2 outline-none"
            placeholder={label} type={type} value={value} />
    </>)
}

function Reset() {
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    return (<div className="flex justify-center items-center pt-[100px] ">
        <Card>
            <div className="w-[200px]">
                <img src="/img.png" alt="" />
            </div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setUname('');
                    setEmail('');
                }}
                className="grid gap-3">

                <FormInput onChange={e => {
                    setUname(e.target.value)
                }} label={"username"} type={"text"} value={uname} />

                <FormInput onChange={e => {
                    setEmail(e.target.value)
                }} label={"email"} type={"email"} value={email} />

                <button className="py-4 justify-self-start">
                    <NavLink to="/home">
                        <Button label="Send Link" fat={true} className={'text-[#000000]'} />
                    </NavLink>
                </button>

            </form>

        </Card>
    </div>)
}

export default Reset