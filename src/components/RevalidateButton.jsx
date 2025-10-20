'use client'
import React from 'react'
import handleRevalidate from "@/functions/handleRevalidate";


function RevalidateButton({type , value}) {
    return (
        <button className="button" onClick={()=>handleRevalidate(type , value)}>
            refresh
        </button>
    )
}

export default RevalidateButton
