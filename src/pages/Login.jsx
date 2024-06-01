
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { Card } from "./Account";
import React, { useState } from 'react'


function FormInput({ label, type, value, onChange }) {
    return (<>
        <input onChange={onChange} className="border px-4 py-2 outline-none"
            placeholder={label} type={type} value={value} />
    </>)
}

function Login() {
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    return (<div className="flex justify-center items-center pt-[100px] ">
        <Card>
            <div className="w-[200px]">
                <img src="/img.png" alt="" />
            </div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setUname('');
                    setPassword('');
                }}
                className="grid gap-3">

                <FormInput onChange={e => {
                    setUname(e.target.value)
                }} label={"username"} type={"text"} value={uname} />

                <FormInput onChange={e => {
                    setPassword(e.target.value)
                }} label={"password"} type={"password"} value={password} />

                <NavLink to='/fg'>
                    <span className="text-[12px] px-1 text-[#003566]">Forget password!</span>
                </NavLink>
                <NavLink to='/reset'>
                    <span className="text-[12px] px-1 text-[#003566]">Reset password!</span>
                </NavLink>

                <button className="py-4 justify-self-start">
                    <Button label="submit" fat={true} className={'text-[#000000]'} />
                </button>

            </form>

        </Card>
    </div>)
}

export default Login