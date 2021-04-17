import React from 'react'
import Card from './common/Card';
import GradientBar from './common/GradientBar';

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
                                    lastname
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    email
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    password
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    valid_until
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    sede
                                </th>
                                <th scope="col" className="px-0 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                    status
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
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 bg-white text-sm ml-5">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-0 py-5 border-b border-gray-200  text-sm items-center">
                                    <div className="flex items-center justify-center">
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                Jean marc
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0 py-5 border-b border-gray-200 text-sm items-center text-center">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        </>
    )
}
