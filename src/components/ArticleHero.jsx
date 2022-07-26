import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi"

function ArticleHero( { title, authorImage, authorName, articleCreatedAt, logedInUser, slug,   handleDeleteArticle } ) {
  
  return ( 
    <div className="flex flex-col bg-[#292524] px-48 py-5 ">
      <div>
        <h1 className="my-5 text-white font-semibold text-4xl">{title}</h1>
      </div>
      <div className="flex items-center pb-7">
        <div className="mr-3">
          <img className="h-10 w-10 rounded-3xl" src={authorImage} alt="img"></img>
        </div>
        <div className="pb-3">
          <h3 className="text-white pb-1 text-l">{authorName}</h3>
          <p className="text-zinc-400 text-xs h-1">{articleCreatedAt}</p>
        </div>
        { logedInUser === authorName &&
          <div className="flex">
            <button className="border border-zinc-400 text-xs p-1 ml-3 mr-1 text-zinc-400 hover:bg-green-600 hover:text-white">
              <Link className="flex"
                to={{ pathname: `/editor/${slug}` }} >
                <FiEdit className="mr-1 mt-[.10rem]" /> Edit Article</Link></button>
            <div className="border border-red-700 hover:bg-red-600 hover:text-white text-xs p-1 py-2 mx-3 text-red-700 flex cursor-pointer">
              <FaTrash className="mr-1 mt-[.10rem]" />
              <button
                onClick={() => handleDeleteArticle(slug)}>
                Delete Article</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default ArticleHero;