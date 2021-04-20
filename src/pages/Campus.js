import React , {useState, useEffect} from 'react'
import Button from '../components/common/GradientButton'
import AddCampus from '../components/campus/AddCampus'
import TableCampus from '../components/campus/TableCampus'
import PageTitle from '../components/common/PageTitle';
import { publicFetch } from './../util/fetch';

export default function Campus() {

    const [showAdd, setShowAdd] = useState(false);
    const [campuses, setCampuses ]=  useState([])

    
    useEffect(() => { 
        const listCampuses = async () => {
            const {data} = await publicFetch.get(
                `campus`
            )
    
            setCampuses(data.campus)
        }

        listCampuses()
    },[])

    const showAddPanel =()=>{
        setShowAdd(!showAdd)
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <PageTitle title="Campus" />
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div>
                            <TableCampus campuses={campuses} />
                        </div>
                        <div className="container-add">
                            <Button text="Add > " onClick={showAddPanel}/>
                        </div>
                        <div style={{display: `${showAdd ? 'block' : 'none'}`}}>
                            <AddCampus showPanel={showAddPanel}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
