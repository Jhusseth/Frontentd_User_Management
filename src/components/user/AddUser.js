import React,{ useState } from 'react'
import GradientBar from '../common/GradientBar';
import Card from '../common/Card';
import { Form, Formik, Field} from 'formik';
import FormSuccess from '../FormSuccess'
import FormError from '../common/FormError'
import FormInput from '../FormInput'
import Label from '../common/Label';
import GradientButton from '../common/GradientButton';
import * as Yup from 'yup';
import { publicFetch } from '../../util/fetch';
// import { Redirect } from 'react-router-dom';

export default function AddCampus(props) {


    const AddUserSchema = Yup.object().shape({
        firstName: Yup.string().required(
            'FirstName is required'
        ), 
        lastName: Yup.string().required(
            'LastName is required'
          ),
        email: Yup.string().required(
            'Email is required'
        ),
        password: Yup.string().required(
            'Password is required'
        ), 
        valid_until: Yup.string().required(
            'Valid Until is required'
        ),
        valid: Yup.string().required(
            'Valid is required'
        ),
    });

    const [addUserSuccess, setSignupSuccess] = useState();
    const [addUserError, setSignupError] = useState();
    
    
    const [addLoading, setLoginLoading] = useState(false);
    
    const submitCredentials = async credentials => {
        try {
            setLoginLoading(true);
            const { data } = await publicFetch.post(
                `${props.idCampus}/users`,
                credentials
            );

            console.log(credentials)

            setSignupSuccess(data.message);
            setSignupError('');
        
            setTimeout(() => {
                // setRedirectOnLogin(true);
                window.location.reload();
            }, 50);

        }
        catch (error) {
            setLoginLoading(false);
            const { data } = error.response;
            setSignupError(data.message);
            setSignupSuccess('');
        }
        finally{
            props.showAddPanel()
            window.location.reload();
        }
    };
    return (
        <>
            <section className="w-3/4 h-screen m-auto sm:pt-10">
                <GradientBar />
                <Card>
                    <div className="flex items-center justify-center py-7 px-2 sm:px-3 lg:px-3">
                        <div className="max-w-md w-full flex items-center justify-center">
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    password: '',
                                    valid_until: '',
                                    valid: false
                                }}
                                onSubmit={values =>
                                submitCredentials(values)
                                }
                                validationSchema={AddUserSchema}
                            >
                                {({values}) => (
                                <Form className="mt-8">
                                    {addUserSuccess && (
                                    <FormSuccess text={addUserSuccess} />
                                    )}
                                    {addUserError && (
                                    <FormError text={addUserError} />
                                    )}
                                    <input
                                    type="hidden"
                                    name="remember"
                                    value="true"
                                    />
                                    <div>
                                        <div className="flex">
                                            <div className="mb-2 mr-2 w-3/4">
                                                <div className="mb-1">
                                                    <Label text="Valid Until" />
                                                </div>
                                                <FormInput
                                                    ariaLabel="Valid_until"
                                                    name="valid_until"
                                                    type="datetime-local"
                                                    placeholder="Valid_until"
                                                />
                                            </div>
                                            <div className="mb-2 ml-2 w-1/2">
                                                <div className="mb-1 ml-4">
                                                    <Label text="Status" />
                                                </div>
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <Field type="checkbox" className="form-checkbox mt-2 ml-4" name="valid" />
                                                        <span className="ml-4 mt-2">{values.valid ? "Active": "Disable"}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="mb-2 mr-2 w-1/2">
                                                <div className="mb-1">
                                                    <Label text="Name" />
                                                </div>
                                                <FormInput
                                                    ariaLabel="FirstName"
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="FirstName"
                                                />
                                            </div>
                                            <div className="mb-2 ml-2 w-1/2">
                                                <div className="mb-1 ml-4">
                                                    <Label text="LastName" />
                                                </div>
                                                <div>
                                                <FormInput
                                                    ariaLabel="LastName"
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="LastName"
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="mb-2 mr-2 w-3/4">
                                                <div className="mb-1">
                                                    <Label text="Email" />
                                                </div>
                                                <FormInput
                                                    ariaLabel="Email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="mb-2 ml-2 w-1/2">
                                                <div className="mb-1 ml-4">
                                                    <Label text="Password" />
                                                </div>
                                                <div>
                                                <FormInput
                                                    ariaLabel="Password"
                                                    name="password"
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-6 flex items-center justify-center">
                                    <GradientButton
                                        type="submit"
                                        text="Save"
                                        loading={addLoading}
                                    />
                                    </div>
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </Card>
            </section>
        </>
    );
};
