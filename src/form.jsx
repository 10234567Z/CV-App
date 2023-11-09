import { useState } from "react";
import Intro from "./Form Components/intro";
import Education from "./Form Components/education";
import Skills from "./Form Components/skills";


export default function Form() {
    return (
        <form className="inpForm">
            <Intro />
            <Education />
            <Skills /><br></br>
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
    )
}