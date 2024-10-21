import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    // console.log(blog);
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  const handleMarkAsRead = (time) => {
    // console.log(time);
    // const newTotalTime = readingTime + time;
    // setReadingTime(newTotalTime);
    setReadingTime(readingTime + time);
  };

  //
  return (
    <div className="w-10/12 mx-auto">
      <Header></Header>

      <main>
        <section className="grid grid-cols-3 gap-6 ">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleBookmarks={handleBookmarks}
          ></Blogs>
          <Bookmarks
            bookmarks={bookmarks}
            readingTime={readingTime}
          ></Bookmarks>
        </section>
      </main>
    </div>
  );
}

export default App;
