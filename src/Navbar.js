import React, { useState, useEffect } from 'react';
import './Navbar.css'

function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <img
                className="navbar__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="navbar__avatar"
                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/149022922_1903879519764227_2663455826270934681_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YAxG7qbJVVwAX9KNIRl&_nc_ht=scontent.fdad2-1.fna&oh=6803c07cc0470f2dafb368e91965a154&oe=6194591C"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Navbar
