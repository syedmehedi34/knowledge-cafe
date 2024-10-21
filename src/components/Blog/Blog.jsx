/* eslint-disable react/prop-types */

import Bookmarks from "../Bookmarks/Bookmarks";

/* eslint-disable no-unused-vars */
const Blog = ({ blog }) => {
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
        <img className="w-full h-[400px]" src={cover_photo} alt="" />
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
          <div className="btn btn-ghost hover:bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
            >
              <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
            </svg>
          </div>
        </div>
      </div>
      {/*  */}

      {/* title  */}
      <h1 className="text-[#111111] font-bold text-[2rem] w-4/5">{title}</h1>
      {/* hashtags  */}
      <p className="text-[#11111199] font-[500] text-lg my-4">
        #programming #programming
      </p>
      {/* mark as read  */}
      <p className="text-[#6047EC] underline font-semibold cursor-pointer transition-transform transform active:scale-95 inline-block ">
        Mark as read
      </p>
      <div className="w-full border-b mt-8 mb-10 border-[#1111111A]"></div>

      {/* Send title and reading time data to bookmark page */}
    </div>
  );
};

export default Blog;
