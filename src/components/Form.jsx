import React from "react";
import { Input } from "./Input";

const Label = ({ children, className = "", ...rest }) => (
  <label {...rest} className={`mb-1 inline-block text-zinc-600 ${className}`}>
    {children}
  </label>
);

export const Form = () => {
  return (
    <div className='w-[90vw] max-w-lg rounded-lg bg-white p-6 shadow-lg'>
      <h2 className='text-2xl font-light mb-2 text-center'>Update</h2>
      <form className='flex flex-col gap-y-3'>
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input placeholder='Knit Striped Dress' id='name' />
        </div>

        <div>
          <Label htmlFor='type'>Type</Label>
          <Input placeholder='Dress with Hood' id='type' />
        </div>

        <div>
          <Label htmlFor='price'>Price</Label>
          <Input type='number' placeholder='29.99' id='price' />
        </div>

        <div>
          <Label htmlFor='description'>Description</Label>
          <textarea
            id='description'
            rows={3}
            placeholder='This unique dress is the epitome of casual comfort and...'
            className='w-full rounded border px-2 py-1 font-light'
          ></textarea>
        </div>

        <div>
          <Label htmlFor='url'>Image URL</Label>
          <Input placeholder='https://www.sample.com/images/21' id='url' />
        </div>

        <button
          className='inline-block w-20 p-1 rounded mt-2 border bg-indigo-500 text-slate-100 hover:bg-indigo-400 duration-75 font-light'
          onClick={(e) => e.preventDefault()}
        >
          Done
        </button>
      </form>
    </div>
  );
};
