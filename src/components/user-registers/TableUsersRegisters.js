import React,{ useState } from 'react'
import Card from '../common/Card';
import GradientBar from '../common/GradientBar';
import { publicFetch } from '../../util/fetch';
import Alert from '../common/Alert'
import EditUser from './EditUserRegister'
import moment from 'moment'
import SearchInput from '../common/SearchInput'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

export default function TableCampus(props) {

    const [mResponse, setMResponse] = useState();
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState();

    const deleteUser = async (id)=>{
        try {
            const { data } = await publicFetch.delete(
            `${props.idCampus}/user/delete/${id}` 
            );
                
            setMResponse(data.message)
            setShow(true)
        }
        catch (error) {
            const { data } = error.response;
            setMResponse(data.message)
            setShow(true)
        }
        finally{
            window.location.reload();
        }
    }

    const close = ()=>{
        setShow(false)
    }

    const edit = (user)=>{
        setUser(user)
        setShowModal(true)
    }

    // const getCampus = async id =>{

    //     console.log(id)

    //     if(id==null){
    //         try {
    //             const { data } = await publicFetch.get(
    //             `campus/${id}` 
    //             );
                
    //             setCmp(data.campus)
    //         }
    //         catch (error) {
    //             const { data } = error.response;
    //             setCmp(data.message);
    //         }
    //     }

    // }

    return (
        <>
            <div className="flex mb-6"><SearchInput searchUser={props.searchUser} /></div>
            {showModal?<EditUser setShowModal={setShowModal} user={user} showModal={showModal}/>:<>
            <GradientBar />
            <Card>
                {show?<Alert text={mResponse} close={close}/>:null}
                <div className="inline-block min-w-full rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    name
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    lastname
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    email
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    campus
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    valid until
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    valid
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    edit
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.users.map((user) => (
                            <tr key={user._id}>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.firstName}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.lastName}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            {user.campus?"Yes":"No"}
                                        </span>
                                    </span>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm ml-5 text-center">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            {moment(user.valid_until).format('MMMM Do YYYY, hh:mm a')}
                                        </span>
                                    </span>
                                </td>

                                <td className="px-0 py-5 border-b border-gray-200  text-sm items-center text-center">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            {user.valid? "Active":"Disable"}
                                        </span>
                                    </span>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200  text-sm items-center">
                                    <div className="flex justify-center">
                                        <button className="rounded-full shadow flex items-center px-3 py-3" onClick={()=>edit(user)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 text-sm items-center">
                                    <div className="flex justify-center">
                                        <button className="rounded-full shadow hover:text-indigo-900 flex items-center px-3 py-3 " onClick={()=>deleteUser(user._id)}>
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
