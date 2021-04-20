import React, {useState, useEffect} from 'react'
import TableContacts from '../components/contact/TableContacts'
import Button from '../components/common/GradientButton'
import AddContact from '../components/contact/AddContact'
import PageTitle from '../components/common/PageTitle';
import { publicFetch } from '../util/fetch';

import {
    useParams
} from "react-router-dom";

export default function Contacts() {

    const [showAdd, setShowAdd] = useState(false);
    const [contacts, setContacts ]=  useState([])

    let { idCampus } = useParams();

    useEffect(() => { 
        const listContacs = async () => {
            const {data} = await publicFetch.get(
                `${idCampus}/contacts`
            )
    
            setContacts(data.contacts)
        }

        listContacs()
    })

    const showAddPanel =()=>{
        setShowAdd(!showAdd)
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <PageTitle title="Contacts" />
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div>
                            <TableContacts idCampus={idCampus} contacts={contacts}/>
                        </div>
                        <div className="container-add">
                            <Button text="Add > " onClick={showAddPanel}/>
                        </div>
                        <div style={{display: `${showAdd ? 'block' : 'none'}`}}>
                            <AddContact idCampus={idCampus} showPanel={showAddPanel}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
