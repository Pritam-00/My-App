import React from "react";
import { Link} from "react-router-dom";

export default function Error () {
    return (
        <div className=" text-center m-10">
        <h1 className="text-5xl">Yeah, you know already</h1>
        <br/>
        <h1 className=" text-3xl"> Good Things Take Time</h1>
        <br/>
        <h1 className="text-xl mb-28"> And, I'm currently under development</h1>
        <br/>
        <Link to="/" className="text-white p-4 bg-sky-500 rounded-full">Let's headback to Home</Link>
        </div>

    )
}