import React from 'react'

type input = {
     label: string
     name: string
     type: string
     value: string
     placeHolder: string
     onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
type text = {
     label: string
     name: string
     value: string
     placeHolder: string
     onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputField = ({ label, name, type, value, placeHolder, onChange }: input) => {
     return (
          <div className='flex flex-col p-2'>
               <label htmlFor={name} className='text-[#F07167] font-bold'>{label}</label>
               <input
                    className='p-2 px-2 rounded-3xl mt-2 bg-gray-100'
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeHolder}
               />
          </div>
     )
}

const TextArea = ({ name, value, label, placeHolder, onChange }: text) => {
     return (
          <div className='flex flex-col'>
               <label htmlFor={name} className='text-[#F07167] font-bold ml-3'>{label}</label>
               <textarea
                    className='p-6 rounded-3xl mt-2 bg-gray-100'
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeHolder}
               />
          </div>
     )
}

export { InputField, TextArea }