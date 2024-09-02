'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

function CreateBlog() {
  const [image, setImage] = useState(null)

  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p className='my-10 text-center'>loading</p>
  }

  if (status === 'unauthenticated') {
    return <p className='my-10 text-center'>Access denied</p>
  }

  return (
    <section className='w-3/4 mx-auto my-10 bg-gray-300 p-10 rounded-xl'>
      <h1 className='text-center text-3xl font-bold'>Create Blog</h1>

      <form className='*:block *:w-full space-y-3 my-5'>
      <input
          type="text"
          placeholder="Title"
          className="py-2 px-3 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Excerpt"
          className="py-2 px-3 rounded-lg"
          required
        />

        <textarea
          placeholder='Description'
          className="py-2 px-3 rounded-lg h-60"
          required
        />

        <select name="" className='py-2 px-3 rounded-lg'>
          <option value="" selected hidden>Select a Category</option>
          <option value="Sports">Sports</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Nature">Nature</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <input type="file"
          className='py-2 px-3 rounded-lg bg-white'
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        {
          image && (
            <div className='w-full my-5'>
              <img src={URL.createObjectURL(image)} alt={image.name} className='h-60 rounded-lg' />
            </div>
          )
        }

        <button type="submit" className='bg-blue-700 text-white py-3 rounded-lg'>Create Blog</button>
      </form>
    </section>
  )
}

export default CreateBlog