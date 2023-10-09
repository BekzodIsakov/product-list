import React, { useState } from "react";
import { useProductContext } from "../context";

import { Button, Input, Spinner } from ".";

const Label = ({ children, className = "", ...rest }) => (
  <label {...rest} className={`mb-1 inline-block text-zinc-600 ${className}`}>
    {children}
  </label>
);

export const Form = ({ product: initialProduct }) => {
  const [_, actions] = useProductContext();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState(initialProduct?.name ?? "");
  const [type, setType] = useState(initialProduct?.type ?? "");
  const [price, setPrice] = useState(initialProduct?.price ?? "");
  const [category, setCategory] = useState(initialProduct?.category ?? "");
  const [description, setDescription] = useState(
    initialProduct?.description ?? ""
  );
  const [imageSrc, setImageSrc] = useState(initialProduct?.imageSrc ?? "");

  const product = {
    id: initialProduct?.id ?? Date.now(),
    name,
    type,
    price,
    category,
    description,
    imageSrc,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    initialProduct ? actions.edit(product) : actions.create(product);
  };

  return (
    <div className='w-[90vw] max-w-lg rounded-lg bg-white p-6 shadow-lg'>
      <h2 className='text-2xl font-light mb-2 text-center'>
        {initialProduct ? "Update" : "Create"}
      </h2>
      <form className='flex flex-col gap-y-3' onSubmit={handleSubmit}>
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Knit Striped Dress'
            id='name'
          />
        </div>

        <div>
          <Label htmlFor='type'>Type</Label>
          <Input
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder='Dress with Hood'
            id='type'
          />
        </div>

        <div>
          <Label htmlFor='category'>Category</Label>
          <Input
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder='dress'
            id='category'
          />
        </div>

        <div>
          <Label htmlFor='price'>Price</Label>
          <Input
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type='number'
            placeholder='29.99'
            id='price'
          />
        </div>

        <div>
          <Label htmlFor='description'>Description</Label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id='description'
            rows={3}
            placeholder='This unique dress is the epitome of casual comfort and...'
            className='w-full rounded border px-2 py-1 font-light'
          ></textarea>
        </div>

        <div>
          <Label htmlFor='url'>Image URL</Label>
          <Input
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            placeholder='https://www.sample.com/images/21'
            id='url'
          />
        </div>

        {isLoading ? (
          <div className='w-20 h-[34px] mt-2'>
            <Spinner />
          </div>
        ) : (
          <Button type='submit'>Done</Button>
        )}
      </form>
    </div>
  );
};
