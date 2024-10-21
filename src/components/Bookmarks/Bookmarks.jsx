import Bookmark from "../Bookmark/Bookmark";

/* eslint-disable react/prop-types */
const Bookmarks = ({ bookmarks, readingTime }) => {
  //   console.log(bookmarks);
  return (
    <div className=" h-full col-span-1">
      <div
        className="bg-[#6047EC1A] border border-[#6047EC] rounded-lg text-center py-5 mb-6
      "
      >
        <p className="text-[#6047EC] text-xl font-bold">
          Spent time on read : {readingTime} min
        </p>
      </div>

      {/* bookmark section */}
      <section className="bg-[#1111110D] p-7 rounded-lg text-[#111111]">
        <h1 className="font-bold text-xl">
          Bookmarked Blogs : {bookmarks.length}
        </h1>

        {/*  */}
        <div>
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bookmarks;
