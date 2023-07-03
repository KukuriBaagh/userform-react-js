import './Form.css'
import { useState } from 'react'

function Userform() {
    const [fname, setFname] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fname, e.target)
    }

    return (
        <>
        <div className='flex justify-center'>
            <form>
                <label className='bg-red-200 rounded' htmlFor="FirstName">First Name :</label>
                <input className='f-name'
                placeholder='Enter Yout First Name'
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        </>
    )
}


export default Userform