import React from 'react'
import Button from '../atoms/Button'
import { InputField } from './InputField'

export const FormAbout = () => {
     return (
          <div>
               <form action="">
                    <div className='border 1px border-black p-2 rounded'>
                         <h1 className='text-center mb-4'>Donate Form</h1>
                         <div className='flex'>
                              <InputField
                                   style='rounded-lg bg-white'
                                   name='first'
                                   type='text'
                                   label='First Name'
                                   value=''
                                   onChange={() => { }}
                                   placeHolder='Rizaldo'
                              />
                              <InputField
                                   style='rounded-lg bg-white'
                                   name='last'
                                   type='text'
                                   label='Last Name'
                                   value=''
                                   onChange={() => { }}
                                   placeHolder='Ramadhoni'
                              />
                         </div>
                         <div className='space-x-3 items-center flex ml-2'>
                              <input type="checkbox" name="" id="" />
                              <label className='text-xs' htmlFor="">Donate as Anonymouse</label>
                         </div>
                         <div>
                              <InputField
                                   style='rounded-lg bg-white'
                                   name='email'
                                   type='email'
                                   label='Email'
                                   value=''
                                   onChange={() => { }}
                                   placeHolder='email@example.com'
                              />
                              <InputField
                                   style='rounded-lg bg-white'
                                   name='phone'
                                   type='number'
                                   label='Phone Number'
                                   value=''
                                   onChange={() => { }}
                                   placeHolder='+6288200993322'
                              />
                              <InputField
                                   style='rounded-lg bg-white'
                                   name='program'
                                   type='text'
                                   label='Program'
                                   value=''
                                   onChange={() => { }}
                                   placeHolder='Sekolah Desa'
                              />
                              <InputField
                                   style='rounded-lg bg-white'
                                   name='amount'
                                   type='text'
                                   label='Amount (Rupiah)'
                                   value=''
                                   onChange={() => { }}
                                   placeHolder='Rp. 100.000.00,-'
                              />
                         </div>
                         <div className='flex items-center'>
                              <InputField
                                   style='rounded-lg bg-white'
                                   name='image'
                                   type='file'
                                   label=''
                                   value=''
                                   onChange={() => { }}
                                   placeHolder=''
                              />
                              <Button title='Reset' buttonColor='mt-2' action={() => { }} />
                         </div>
                         <Button buttonColor='mx-auto mt-6' title='Donate' action={() => { }} />
                    </div>
               </form>
          </div>
     )
}
