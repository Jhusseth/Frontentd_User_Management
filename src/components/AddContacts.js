import React,{ useContext, useState } from 'react'
import GradientBar from './common/GradientBar';
import Card from './common/Card';
import { Form, Formik } from 'formik';
import FormSuccess from './FormSuccess'
import FormError from './common/FormError'
import FormInput from './FormInput'
import Label from './common/Label';
import GradientButton from './common/GradientButton';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { publicFetch } from '../util/fetch';
import { Redirect } from 'react-router-dom';

export default function AddCampus() {


    const SignupSchema = Yup.object().shape({
        name: Yup.string().required(
            'Campus name is required'
        ), 
        city: Yup.string().required(
            'City name is required'
          ),
        address: Yup.string().required(
            'Address is required'
        ),
        zipcode: Yup.string().required(
            'ZipCode is required'
          ), 
    });

    const authContext = useContext(AuthContext);
    const [signupSuccess, setSignupSuccess] = useState();
    const [signupError, setSignupError] = useState();
    const [redirectOnLogin, setRedirectOnLogin] = useState(false)
    const [campus, setCampus] = useState();
    
    
    const [loginLoading, setLoginLoading] = useState(false);
    
    const submitCredentials = async credentials => {
        try {
            setLoginLoading(true);
            const { data } = await publicFetch.post(
                `signup`,
                credentials
        );
    
        authContext.setAuthState(data);
        setSignupSuccess(data.message);
        setSignupError('');
    
        setTimeout(() => {
            setRedirectOnLogin(true);
        }, 700);

        }
        catch (error) {
            setLoginLoading(false);
            const { data } = error.response;
            setSignupError(data.message);
            setSignupSuccess('');
        }
    };
    return (
        <>
            {redirectOnLogin && <Redirect to="/campus" />}
            <section className="w-1/2 h-screen m-auto sm:pt-10">
                <GradientBar />
                <Card>
                    <div className="flex items-center justify-center py-7 px-2 sm:px-3 lg:px-3">
                        <div className="max-w-md w-full flex items-center justify-center">
                            <Formik
                                initialValues={{
                                name: '',
                                city: '',
                                zipcode: '',
                                address: '',
                                active: false
                                }}
                                onSubmit={values =>
                                submitCredentials(values)
                                }
                                validationSchema={SignupSchema}
                            >
                                {() => (
                                <Form className="mt-8">
                                    {signupSuccess && (
                                    <FormSuccess text={signupSuccess} />
                                    )}
                                    {signupError && (
                                    <FormError text={signupError} />
                                    )}
                                    <input
                                    type="hidden"
                                    name="remember"
                                    value="true"
                                    />
                                    <div>
                                        <div className="flex">
                                            <div className="mb-2 mr-2 w-1/3">
                                                <div className="mb-1">
                                                    <Label text="City" />
                                                </div>
                                                <FormInput
                                                    ariaLabel="City"
                                                    name="city"
                                                    type="text"
                                                    placeholder="City"
                                                />
                                            </div>
                                            <div className="mb-2 ml-2 w-1/2">
                                                <div className="mb-1 ml-4">
                                                    <Label text="Address" />
                                                </div>
                                                <div>
                                                <FormInput
                                                    ariaLabel="Address"
                                                    name="address"
                                                    type="address"
                                                    placeholder="Address"
                                                />
                                                </div>
                                            </div>
                                            <div className="mb-2 ml-3 w-1/3">
                                                <div className="mb-1 ml-4">
                                                    <Label text="ZipCode" />
                                                </div>
                                                <div>
                                                <FormInput
                                                    ariaLabel="Zipcode"
                                                    name="zipcode"
                                                    type="number"
                                                    placeholder="Zipcode"
                                                />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-6 flex items-center justify-center">
                                    <GradientButton
                                        type="submit"
                                        text="Save"
                                        loading={loginLoading}
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
