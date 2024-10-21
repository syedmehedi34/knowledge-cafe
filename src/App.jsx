import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Header></Header>

      <main>
        <section className="grid grid-cols-3 gap-6 ">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </section>
      </main>
    </div>
  );
}

export default App;
