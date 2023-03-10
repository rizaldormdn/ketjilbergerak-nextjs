import mail from '@/pages/api/mail'
import axios from 'axios'
import React, { useState } from 'react'
import Button from '../atoms/Button'
import { InputField, TextArea } from '../atoms/InputField'


const FormContact = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setData((prevData) => ({ ...prevData, [name]: value }))

  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post("api/mail", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res.data);
      
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div>
<<<<<<< HEAD
      <form action="" onSubmit={handleSubmit}>
        <div className='flex '>
          <InputField style='px-4'
=======
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <InputField
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
            name='name'
            type='text'
            value={data.name}
            onChange={handleChange}
            label="Name"
            placeHolder={'Jhon Doe'}
          />
          <InputField style='px-4'
            name='email'
            type='text'
            value={data.email}
            onChange={handleChange}
            label="Email"
            placeHolder={'example@gmail.com'}
          />
        </div>
        <div className='flex'>
          <InputField style='px-4'
            name='phone'
            type='number'
            value={data.phone}
            onChange={handleChange}
            label="Phone"
            placeHolder={'081223456712'}
          />
          <InputField style='px-4'
            name='company'
            type='text'
            value={data.company}
            onChange={handleChange}
            label="Company"
            placeHolder={'Google'}
          />
        </div>
        <TextArea
          name='message'
          label='Message'
          value={data.message}
          onChange={handleChange}
          placeHolder={'Please type your message here...'}
        />
<<<<<<< HEAD
        <Button action={(e) => { }} title="Send Message" buttonColor="bg-[#F07167] md:ml-[0.5rem] ml-[8rem] mt-5 rounded-3xl " textColor='text-white' style=''/>
=======
        <Button action={(e) => { }} title="Send Message" buttonColor="bg-[#F07167] mt-5 md:ml-[1rem] ml-[7.5rem] rounded-3xl" textColor='text-white' />
>>>>>>> 2dcd7200939ebb754e80cfe26c286227556b1a6a
      </form>
    </div>
  )
}
export default FormContact