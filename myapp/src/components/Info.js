import React from "react"
import Image from "./images/selfie.jpeg"
import "../App.css"

export default function Info() {
    return (
        <>
        <img className = "Image" src= {Image} alt ="me" />
        <div className ="Name">
        <h1> Raman Khangura </h1>
        <h4> Front end Developer </h4>
        <h6> laurasmith.website </h6>
        </div>
        <button  Email />
        <button  LinkedIn />

        </>
    )
}