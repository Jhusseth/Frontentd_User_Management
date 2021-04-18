import React,{ useState } from 'react'
import GradientBar from './common/GradientBar';
import Card from './common/Card';
import { Form, Formik, Field} from 'formik';
import FormSuccess from './FormSuccess'
import FormError from './common/FormError'
import FormInput from './FormInput'
import Label from './common/Label';
import GradientButton from './common/GradientButton';
import * as Yup from 'yup';
import { publicFetch } from './../util/fetch';
import { Redirect } from 'react-router-dom';

export default function AddCampus(props) {


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

    const [addCampusSuccess, setAddCampusSuccess] = useState();
    const [addCampusError, setAddCampusError] = useState();
    const [redirectCampus, setRedirectOnCampus] = useState(false)
    
    
    const [addCampus, setCampus] = useState(false);
    
    const submitCredentials = async credentials => {
        try {
            setCampus(true);
            const { data } = await publicFetch.post(
                `campus`,
                credentials
            );
    
        setAddCampusSuccess(data.message);
        setAddCampusError('');
    
        setTimeout(() => {
            setRedirectOnCampus(true);
        }, 50);

        }
        catch (error) {
            setCampus(false);
            const { data } = error.response;
            setAddCampusError(data.message);
            setAddCampusSuccess('');
        }
        finally{
            props.showAddPanel()
            window.location.reload();
        }
        
    };
    return (
        <>
            {redirectCampus && <Redirect push to="/campus2" />}
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
                                {({values}) => (
                                <Form className="mt-8">
                                    {addCampusSuccess && (
                                    <FormSuccess text={addCampusSuccess} />
                                    )}
                                    {addCampusError && (
                                    <FormError text={addCampusError} />
                                    )}
                                    <input
                                    type="hidden"
                                    name="remember"
                                    value="true"
                                    />
                                    <div>
                                        <div className="flex">
                                            <div className="mb-2 mr-2 w-1/2">
                                                <div className="mb-1">
                                                    <Label text="Name" />
                                                </div>
                                                <FormInput
                                                    ariaLabel="Name"
                                                    name="name"
                                                    type="text"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div className="mb-2 ml-2 w-1/2">
                                                <div className="mb-1 ml-4">
                                                    <Label text="Status" />
                                                </div>
                                                <div>
                                                    <label className="inline-flex items-center">
                                                        <Field type="checkbox" className="form-checkbox mt-2 ml-4" name="active" />
                                                        <span className="ml-4 mt-2">{values.active ? "Active": "Disable"}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="display mt-6 mb-4">Ubication</h2>
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
                                        loading={addCampus}
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
