import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function SearchInput({value,method}) {
    return (
        <>
           <div className="flex">
                <input
                    className="py-2 px-4 border bg-gray-100 border-gray-300 rounded-full focus:outline-none w-32 sm:w-64"
                    placeholder="Search" onChange={value}
                />
                <button className="rounded-full bg-gradient px-4 ml-2 text-white flex items-center text-xs focus:outline-none shadow-lg" onClick={method}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div> 
        </>
    )
}
