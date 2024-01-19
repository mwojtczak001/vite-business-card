import React from "react"

export default function Info() {
    return (
        <div className="info-container">
            <img src="hotdog.png" className="hotdog-icon" />
            <h1>Michael Wojtczak</h1>
            <h5>Frontend Developer</h5>
            <p className="website">michaelwojtczak.website</p>
            <div>
                <button className="email-button">
                    <i className="fa-solid fa-envelope"></i>
                    Email
                </button>
            </div>
        </div>
    )
}
