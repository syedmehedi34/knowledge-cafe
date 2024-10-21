/* eslint-disable react/prop-types */

const Bookmark = ({ bookmark }) => {
  //   console.log(bookmark);
  return (
    <div className="p-5 bg-white rounded-lg mt-4">
      <h1 className="font-semibold">
        {bookmark.title}
        {}
      </h1>
    </div>
  );
};

export default Bookmark;
