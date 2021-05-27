import React, { useState } from 'react'

function Tooltip({ text, children }) {
    const [visible, setVisible] = useState(false)

    return (
        <div
            className="Tooltip"
            onMouseEnter={() => {
                setVisible(true);
            }}
            onMouseLeave={() => {
                setVisible(false)
            }}
        >
            <>{children}</>
            {
                visible &&
                <div className="tooltip-text">{text}</div>
            }
        </div>
    )
}

export default Tooltip;