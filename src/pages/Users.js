import React , {useState} from 'react'
import Button from '../components/common/GradientButton'
import AddUser from '../components/AddUser'
import TableUsers from '../components/TableUsers'
import PageTitle from '../components/common/PageTitle';

export default function Users() {

    const [showAdd, setShowAdd] = useState(false);

    const showAddPanel =()=>{
        setShowAdd(!showAdd)
        console.log('' + showAdd)
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <PageTitle title="Users" />
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div>
                            <TableUsers />
                        </div>
                        <div className="container-add">
                            <Button text="Add > " onClick={showAddPanel}/>
                        </div>
                        <div style={{display: `${showAdd ? 'block' : 'none'}`}}>
                            <AddUser />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
