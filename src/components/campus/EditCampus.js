import React,{useState} from "react";
import GradientBar from '../common/GradientBar';
import Card from '../common/Card';
import { Form, Formik, Field} from 'formik';
import FormSuccess from '../FormSuccess'
import FormError from '../common/FormError'
import FormInput from '../FormInput'
import Label from '../common/Label';
import GradientButton from '../common/GradientButton';
import GradientLink from '../common/GradientLink';
import * as Yup from 'yup';
import { publicFetch } from '../../util/fetch';

export default function Modal(props) {
  const EditSchema = Yup.object().shape({
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
    
    
    const [editCampus, setEditCampus] = useState(false);
    
    const submitCampus = async values => {
        try {
            setEditCampus(true);
            const { data } = await publicFetch.put(
                `campus/${props.campus._id}`,
                values
            );

    
            setAddCampusSuccess(data.message);
            setAddCampusError('');

        }
        catch (error) {
            setEditCampus(false);
            const { data } = error.response;
            setAddCampusError(data.message);
            setAddCampusSuccess('');
        }
        finally{
            setTimeout(() => {
                props.setShowModal(false)
                window.location.reload();
            }, 1000);
        }

    };
  return (
    <>
      {props.showModal ? (
        <>
            <section className="w-3/4 h-screen m-auto sm:pt-10">
                <GradientBar />
                <Card>
                    <div className="flex items-center justify-center py-7 px-2 sm:px-3 lg:px-3">
                        <div className="max-w-md w-full flex items-center justify-center">
                            <Formik
                                initialValues={{
                                    name: props.campus.name,
                                    city: props.campus.ubication.city,
                                    zipcode: props.campus.ubication.zipcode,
                                    address: props.campus.ubication.address,
                                    active: props.campus.active
                                }}
                                onSubmit={values =>
                                submitCampus(values)
                                }
                                validationSchema={EditSchema}
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
                                            <div className="mb-2 mr-2 w-64">
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
                                            <div className="mb-2 ml-2 w-full">
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
                                            <div className="mb-2 ml-3 w-64">
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
                                            loading={editCampus}
                                        />
                                        <div className="ml-6">
                                            <GradientLink
                                                to="/campus2"
                                                text="Exit"
                                            />
                                        </div>
                                    </div>
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </Card>
            </section>
        </>
      ) : null}
    </>
  );
}