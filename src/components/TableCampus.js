import React from 'react'
import ButtonLink from '../components/common/GradientLink';
import Card from '../components/common/Card';
import GradientBar from './../components/common/GradientBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

export default function TableCampus() {
    return (
        <>
            <GradientBar />
            <Card>
                <div className="inline-block min-w-full rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    name
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    status
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    Ubication
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    Contacts
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    users
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
                            <tr>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex justify-center">
                                        <ButtonLink
                                            to='/contacts'
                                            text='Ver'
                                            />
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm ml-5">
                                    <div className="flex justify-center">
                                        <ButtonLink
                                            to='/contacts'
                                            text='Ver'
                                            />
                                    </div>
                                </td>

                                <td className="px-0 py-5 border-b border-gray-200  text-sm items-center">
                                    <div className="flex justify-center">
                                        <button className="rounded-full shadow flex items-center px-3 py-3">
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 text-sm items-center">
                                    <div className="flex justify-center">
                                        <button className="rounded-full shadow hover:text-indigo-900 flex items-center px-3 py-3 ">
                                            <FontAwesomeIcon icon={faTrashAlt} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </>
    )
}
