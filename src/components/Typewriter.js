import React, { useState, useEffect, useRef } from "react";

function Typewriter({ words }) {
    const index = useRef(0)
    const [currentText, setCurrentText] = useState('')

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setCurrentText((value) => value + words.charAt(index.current))
            index.current++
        }, 200);
        return () => {
            clearTimeout(timeOutId)
        }
    }, [currentText, words])

    return (
        <div className="Typewriter">
            <span>{currentText}<div className="pointer"></div></span>
        </div>
    )
}

export default Typewriter;