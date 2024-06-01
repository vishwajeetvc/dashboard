import { useState } from "react";
import { Card } from "./Account"
import Button from "../components/Button";

function FormInput({ label, type, value, onChange }) {
    return (<>
        <input onChange={onChange} className="border px-4 py-2 outline-none  rounded-lg
        "
            placeholder={label} type={type} value={value} />
    </>)
}


function Signup() {
    const [name, setName] = useState('');
    const [uname, setUname] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    return (<div className=" md:flex justify-center items-center md:pt-[100px] ">
        <Card>
            <div className="w-[200px]">
                <img src="/img.png" alt="" />
            </div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if(password != repassword){
                        alert("password did not match")
                    }
                    setUname('');
                    setPassword('');
                    setRePassword('');
                    setName('');
                }}
                className="grid gap-3">

                <FormInput onChange={e => {
                    setName(e.target.value)
                }} label={"name"} type={"text"} value={name} />

                <FormInput onChange={e => {
                    setUname(e.target.value)
                }} label={"username"} type={"text"} value={uname} />

                <FormInput onChange={e => {
                    setPassword(e.target.value)
                }} label={"password"} type={"password"} value={password} />

                <FormInput onChange={e => {
                    setRePassword(e.target.value)
                }} label={"re-password"} type={"password"} value={repassword} />


                <button className="py-4 justify-self-start">
                    <Button label="submit" fat={true} className={'text-[#000000]'} />
                </button>

            </form>

        </Card>
    </div>)
}

export default Signup