import React,{useState} from 'react'
import Card from './common/Card';
import GradientBar from './common/GradientBar';
import { publicFetch } from '../util/fetch';
import Alert from '../components/Alert'
import EditContact from '../components/EditContact'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

export default function TableContacts(props) {

    const [mResponse, setMResponse] = useState();
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [contact, setContact] = useState();

    const deleteContact = async (id)=>{
        try {
            const { data } = await publicFetch.delete(
            `${props.idCampus}/contact/delete/${id}` 
            );
                
            setMResponse(data.message)
            setShow(true)
        }
        catch (error) {
            const { data } = error.response;
            setMResponse(data.message)
            setShow(true)
        }
    }

    const close = ()=>{
        setShow(false)
    }

    const edit = (contact)=>{
        setContact(contact)
        setShowModal(true)
    }

    return (
        <>
            {showModal?<EditContact setShowModal={setShowModal} idCampus={props.idCampus} contact={contact} showModal={showModal}/>:<>
            <GradientBar />
            <Card>
                {show?<Alert text={mResponse} close={close}/>:null}
                <div className="inline-block min-w-full rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    name
                                </th>
                                <th scope="col" className="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    phone
                                </th>
                                <th scope="col" className="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    email
                                </th>
                                <th scope="col" className="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    edit
                                </th>
                                <th scope="col" className="py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.contacts.map((contact) => (
                            <tr key={contact._id}>
                                <td className="py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {contact.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-5 border-b border-gray-200 bg-white text-sm text-center ">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {contact.phone}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-5 border-b border-gray-200 bg-white text-sm text-center ">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            {contact.email}
                                        </span>
                                    </span>
                                </td>
                                <td className="py-5 border-b border-gray-200  text-sm items-center">
                                    <div className="flex justify-center">
                                        <button className="rounded-full shadow flex items-center px-3 py-3" onClick={()=>edit(contact)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                    </div>
                                </td>
                                <td className="py-5 border-b border-gray-200 text-sm items-center">
                                    <div className="flex justify-center">
                                        <button className="rounded-full shadow hover:text-indigo-900 flex items-center px-3 py-3 " onClick={()=>deleteContact(contact._id)}>
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card></>}
        </>
    )
}
