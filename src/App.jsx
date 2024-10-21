import { useState, useEffect } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState(() => {
    // Load bookmarks from local storage if available
    const savedBookmarks = localStorage.getItem("bookmarks");
    return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  });

  const [readingTime, setReadingTime] = useState(() => {
    // Load reading time from local storage if available
    const savedReadingTime = localStorage.getItem("readingTime");
    return savedReadingTime ? JSON.parse(savedReadingTime) : 0;
  });

  const handleBookmarks = (blog) => {
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === blog.id);

    if (isBookmarked) {
      const updatedBookmarks = bookmarks.filter(
        (bookmark) => bookmark.id !== blog.id
      );
      setBookmarks(updatedBookmarks);
    } else {
      setBookmarks((prevBookmarks) => [...prevBookmarks, blog]);
    }
  };

  const handleMarkAsRead = (id, time) => {
    setReadingTime((prevReadingTime) => prevReadingTime + time);

    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  useEffect(() => {
    // Update local storage whenever bookmarks change
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    // Update local storage whenever reading time changes
    localStorage.setItem("readingTime", JSON.stringify(readingTime));
  }, [readingTime]);

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
