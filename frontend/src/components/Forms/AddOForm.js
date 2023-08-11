import React, { useState } from 'react'
import {useMetaMask} from 'metamask-react'
import {ethers} from 'ethers'
import ABI from '../../abi.json'

const donationAppAddress = '0xe072DcF2CE6e29AE93D3554fB4d76d3C7A018f33'

const donationContract = new ethers.Contract(donationAppAddress, ABI)

const AddOForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const {status, connect, ethereum} = useMetaMask()

    if(status === 'notConnected') {
        return (
            <button onClick={connect}>Connect Metamask</button>
        )
    }

    const checkConnected = () => {
        if(status === 'notConnected'){
            return(
                <p className='text-center font-bold text-2xl'>Not Connected</p>
            )
        }else if(status === 'connecting'){
            return(
                <p className='text-center font-bold text-2xl'>Connecting...</p>
            )
        }else{
            return(
                <p className='text-center font-bold text-2xl'>Conneccted</p>
            )
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            // Get Access to provider
            const provider = new ethers.BrowserProvider(ethereum);
            // Get Signer
            const signer = await provider.getSigner();
            // Call Contract Method
            await donationContract.connect(signer).addOrganisation(name, address);
            // console.log({name, address})
            setName('')
            setAddress('')
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div class="flex justify-center align-middle my-20">
  <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <form onSubmit={handleSubmit}>
      <div class="form-group mb-6">
        <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Full Name</label>
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
          aria-describedby="emailHelp" value={name} name='name' placeholder="Enter Full Name" onChange={(e) => setName(e.target.value) } />
      </div>
      <div class="form-group mb-6">
        <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Address</label>
        <input type="text" name='address' value={address} class="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
          placeholder="Enter Address" onChange={(e) => setAddress(e.target.value)} />
          <small id="emailHelp" class="block mt-1 text-xs text-gray-600">We'll never share your details with anyone
          else.</small>
      </div>
      {/* <div class="form-group form-check mb-6">
        <input type="checkbox"
          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          id="exampleCheck1" />
        <label class="form-check-label inline-block text-gray-800" for="exampleCheck1">Check me out</label>
      </div> */}
      <button type="submit" class="
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Submit</button>
    </form>
    <div>{checkConnected()}</div>
  </div>

</div>
  )
}

export default AddOForm