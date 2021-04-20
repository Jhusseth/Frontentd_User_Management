import React,{useState} from "react";
import GradientBar from '../common/GradientBar';
import Card from '../common/Card';
import { Form, Formik} from 'formik';
import FormSuccess from '../FormSuccess'
import FormError from '../common/FormError'
import FormInput from '../FormInput'
import Label from '../common/Label';
import GradientButton from '../common/GradientButton';
import * as Yup from 'yup';
import { publicFetch } from '../../util/fetch';

export default function Modal(props) {

  const EditSchema = Yup.object().shape({
    name: Yup.string().required(
        'Contact name is required'
    ), 
    email: Yup.string().required(
        'Email is required'
      ),
    phone: Yup.string().required(
        'phone is required'
    ) 
    });
    const [editContactSuccess, setEditContactSuccess] = useState();
    const [editContactError, setEditContactError] = useState();
    
    
    const [editContact, setEditContact] = useState(false);
    
    const submitContact = async values => {
        try {
            setEditContact(true);
            const { data } = await publicFetch.put(
                `${props.idCampus}/contact/${props.contact._id}`,
                values
            );
    
            setEditContactSuccess(data.message);
            setEditContactError('');

        }
        catch (error) {
            setEditContact(false);
            const { data } = error.response;
            setEditContactError(data.message);
            setEditContactSuccess('');
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
                                    name: props.contact.name,
                                    email: props.contact.email,
                                    phone: props.contact.phone,
                                }}
                                onSubmit={values =>
                                submitContact(values)
                                }
                                validationSchema={EditSchema}
                            >
                                {() => (
                                <Form className="mt-8">
                                    {editContactSuccess && (
                                    <FormSuccess text={editContactSuccess} />
                                    )}
                                    {editContactError && (
                                    <FormError text={editContactError} />
                                    )}
                                    <input
                                    type="hidden"
                                    name="remember"
                                    value="true"
                                    />
                                    <div>
                                        <div className="flex">
                                            <div className="mb-2 mr-2 w-64">
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
                                            <div className="mb-2 ml-2 w-4/5">
                                                <div className="mb-1">
                                                    <Label text="Email" />
                                                </div>
                                                <div>
                                                <FormInput
                                                    ariaLabel="Email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                                </div>
                                            </div>
                                            <div className="mb-2 ml-3 w-64">
                                                <div className="mb-1">
                                                    <Label text="Phone" />
                                                </div>
                                                <div>
                                                <FormInput
                                                    ariaLabel="Pnone"
                                                    name="phone"
                                                    type="phone"
                                                    placeholder="Phone"
                                                />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="mt-6 flex items-center justify-center">
                                        <GradientButton
                                            type="submit"
                                            text="Save"
                                            loading={editContact}
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
      ) : null}
    </>
  );
}