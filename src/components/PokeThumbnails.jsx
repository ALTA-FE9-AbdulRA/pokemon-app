import React from "react";
import { Link } from "react-router-dom";

const PokeThumbnails = ({
    id,
    name,
    images,
}) => {

    return (
        <div className="{style} card-wrapper mx-8">
            <img src={images} alt={name} className="img-poke mx-4 px-2"/>
                <div className="detail-wrapper">
                    <h3 className="name-poke text-center">{name.toUpperCase()}</h3>
                        <Link to="/PokeDetails">
                            <button className="w-full inline-block px-6 py-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded focus:outline-none focus:ring-0 transition duration-150 ease-in-out ">
                                Details
                            </button>
                        </Link> 
                </div>
        </div>
    )
};

export default PokeThumbnails;