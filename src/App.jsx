import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    if (bookmarks.includes(blog)) {
      setBookmarks(bookmarks.filter((bookmark) => bookmark !== blog));
    } else {
      setBookmarks([...bookmarks, blog]);
    }
  };

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time);

    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
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
