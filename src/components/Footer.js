import React from 'react'
import {
    faFacebook,
    faGithub,
    faLinkedin

} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {

    const year = new Date().getFullYear();
    return (
        <>
            <div className=" flex justify-center text-center items-center bg-transparent py-3">

                <div className="mr-5">
                <a className="rounded-full text-gradient text-xs shadow-lg" href="https://www.facebook.com/jhussethvaironel.sanchezarias" target="blank">
                    <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                </div>
                <div>
                <a className="rounded-full text-gradient text-xs shadow-lg" href="https://github.com/Jhusseth" target="blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                </div>
                <div className="ml-5">
                <a className="rounded-full text-gradient text-xs shadow-lg" href="https://www.linkedin.com/in/jhusseth-sanchez" target="blank">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                </div>

            </div>
            <div className='flex justify-center mt-4'>
                © <b>{year}</b>
            </div>
            <div className='flex justify-center'>
                <b>Jhusseth </b>   
            </div>
        </>
    )
}
