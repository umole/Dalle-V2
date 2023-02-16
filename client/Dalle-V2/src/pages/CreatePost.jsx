import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomPrompts } from '../utils';
import { preview } from '../assets';
import { FormField, Loader } from '../components';


export const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  });
  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {

  }

  function handleChange() {

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create imaginative and visually stunning AI through DALL-E and share them with the community.</p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            LabelName='your name'
            type='text'
            name='name'
            placeholder='john Doe'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField 
            LabelName='prompt'
            type='text'
            name='prompt'
            placeholder='earth reviving after human extinction, a new beginning, nature taking over buildings'
            value={form.name}
            handleChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}
