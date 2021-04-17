import React , {useState} from 'react'
import Button from '../components/common/GradientButton'
import AddCampus from '../components/AddCampus'
import TableCampus from '../components/TableCampus'

export default function Campus() {

    const [showAdd, setShowAdd] = useState(false);

    const showAddPanel =()=>{
        setShowAdd(!showAdd)
        console.log('' + showAdd)
    }

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div>
                            <TableCampus />
                        </div>
                        <div className="container-add">
                            <Button text="Add > " onClick={showAddPanel}/>
                        </div>
                        <div style={{display: `${showAdd ? 'block' : 'none'}`}}>
                            <AddCampus />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
