/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  //   console.log(blog);
  const {
    id,
    cover_photo,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div>
      <div>
        <img className="w-full h-[400px] rounded-lg" src={cover_photo} alt="" />
      </div>

      {/* heading div  */}
      <div className="mt-5 mb-3 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div className="w-12 h-12 rounded-full">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={author_img}
              alt=""
            />
          </div>
          <div>
            <p className="text-2xl font-bold text-[#111111]">{author}</p>
            <p className="text-[#11111199] font-[600]">
              {posted_date} (4 Days ago)
            </p>
          </div>
        </div>
        {/* reading time  */}
        <div className="flex items-center">
          <p className="font-[500] text-xl text-[#11111199]">
            {reading_time} min read
          </p>
          <button
            onClick={() => handleBookmarks(blog)}
            className="btn btn-ghost hover:bg-white text-xl"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      {/*  */}

      {/* title  */}
      <h1 className="text-[#111111] font-bold text-[2rem] w-4/5">{title}</h1>
      {/* hashtags  */}
      <p className="text-[#11111199] font-[500] text-lg my-3">
        {hashtags.map((hash, idx) => (
          <span key={idx}>{hash} </span>
        ))}
      </p>
      {/* mark as read  */}
      <p
        onClick={() => handleMarkAsRead(blog.reading_time)}
        className="text-[#6047EC] underline font-semibold cursor-pointer transition-transform transform active:scale-95 inline-block "
      >
        Mark as read
      </p>
      <div className="w-full border-b mt-8 mb-10 border-[#1111111A]"></div>

      {/* Send title and reading time data to bookmark page */}
    </div>
  );
};

export default Blog;
