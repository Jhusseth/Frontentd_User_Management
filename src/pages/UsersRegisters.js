import React , {useState, useEffect} from 'react'
import TableUsers from '../components/user-registers/TableUsersRegisters'
import PageTitle from '../components/common/PageTitle';
import { publicFetch } from '../util/fetch';

export default function Users() {
    const [users, setUsers ]=  useState([])
    const [search, setSearch] = useState(false);

    useEffect(() => { 
        const listUsers = async () => {
            const {data} = await publicFetch.get(
                `users`
            )
    
            setUsers(data.users)
        }
        if(!search){
            listUsers()
        }
    })

    const searchUser = async values =>{
        setSearch(true)
        try{

            const { data } = await publicFetch.get(
            `users/${values.search}` 
            );

            console.log(data.users)

            if(data.users.length===0){
                console.log('entro')

                const { data } = await publicFetch.get(
                    `usersCampus/${values.search}` 
                );

                setSearch(true)
                console.log(data.users)
                setUsers(data.users)
                
            }
            else{
                setSearch(true)
                setUsers(data.users)
            }
        }
        catch(error){
            setSearch(true)
            console.log(error)
        }
                
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <PageTitle title="Users" />
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div>
                            <TableUsers users={users} searchUser={searchUser}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
