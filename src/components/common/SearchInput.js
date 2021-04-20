import React from 'react'
import { Form, Formik, Field} from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function SearchInput({searchUser}) {

    return (
        <>
           <div className="flex">
                <Formik
                    initialValues={{
                        search: ''
                    }}
                    onSubmit={values =>
                        searchUser(values)
                    }
                >
                {() => (
                     <Form>
                         <div className="flex">
                            <Field
                                className="py-2 px-4 border bg-gray-400 border-gray-300 rounded-full focus:outline-none w-32 sm:w-64"
                                aria-label="Search"
                                name="search" 
                                type="text"
                                placeholder="Search"

                            />
                            <button className="rounded-full bg-gradient px-4 ml-2 text-white flex items-center text-xs focus:outline-none shadow-lg" type="submit">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                     </Form>
                )}
                </Formik>
            </div> 
        </>
    )
}
