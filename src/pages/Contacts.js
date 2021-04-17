import React, {useState} from 'react'
import TableContacts from '../components/TableContacts'
import Button from '../components/common/GradientButton'
import AddContact from '../components/AddContact'
import PageTitle from '../components/common/PageTitle';

export default function Contacts() {

    const [showAdd, setShowAdd] = useState(false);

    const showAddPanel =()=>{
        setShowAdd(!showAdd)
        console.log('' + showAdd)
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <PageTitle title="Contacts" />
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div>
                            <TableContacts />
                        </div>
                        <div className="container-add">
                            <Button text="Add > " onClick={showAddPanel}/>
                        </div>
                        <div style={{display: `${showAdd ? 'block' : 'none'}`}}>
                            <AddContact />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
