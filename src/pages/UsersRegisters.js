import React , {useState, useEffect} from 'react'
import Button from '../components/common/GradientButton'
import TableUsers from '../components/TableUsers'
import PageTitle from '../components/common/PageTitle';
import { publicFetch } from '../util/fetch';

export default function Users() {

    const [showAdd, setShowAdd] = useState(false);
    const [users, setUsers ]=  useState([])

    useEffect(() => { 
        const listUsers = async () => {
            const {data} = await publicFetch.get(
                `users`
            )
    
            setUsers(data.users)
        }

        listUsers()
    })

    const showAddPanel =()=>{
        setShowAdd(!showAdd)
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <PageTitle title="Users" />
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div>
                            <TableUsers users={users} />
                        </div>
                        <div className="container-add">
                            <Button text="Add > " onClick={showAddPanel}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
