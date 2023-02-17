import React from 'react'

const FormField = (props) => {
  return (
    <div>
    <div  className='flex item-center gap-2 mb-2'>
      <label
        htmlFor={props.name}
        className='block text-sm font-medium text-gray-900'
      >
        {props.labelName}
      </label>
      {props.isSurpriseMe && (
        <button
          type='button'
          onClick={props.handleSurpriseMe}
          className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
        >
          Surprise Me
        </button>
      )}
    </div>
    <input
      type={props.type}
      id={props.name}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
      required
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
    />
    </div>
  )
}

export default FormField