import React from 'react'
import appwriteService from "../appwrite/conf"
import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <div>
      <Link to={`/post/${$id}`}></Link>
      <div className="w-full bg-gray-100 rounded-xl p-4 ">
        <div className="justify-center w-full mb-4">
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl ' />

        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </div>
  )
}

export default PostCard
