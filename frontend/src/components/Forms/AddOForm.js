import React, { useState } from 'react'
import {useMetaMask} from 'metamask-react'



const AddOForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const {status, connect} = useMetaMask()

    if(status === 'notConnected') {
        return (
            <button onClick={connect}>Connect Metamask</button>
        )
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            console.log({name, address})
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' name='name' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} required/>
            <label>Address</label>
            <input type='text' name='address' value={address} placeholder='address' onChange={(e) => setAddress(e.target.value)} required/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddOForm