import React from "react";
import { IoMdBeer } from "react-icons/io";

export const Logo = ({size}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <IoMdBeer size={size + 4} />
            <span style={{ fontWeight: 600, color: "white", fontSize: size, marginLeft: '6px', fontFamily: 'Manrope' }}>Beerghain</span>
        </div>
    );
}

export default Logo;
