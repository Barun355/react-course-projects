import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const tempBlog = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      tempBlog.data.find((blog, idx) => {
        setBlogs((prev) => [...prev, { ...blog }]);
        return idx == 5 ? true : false;
      });
    }

    fetchBlogs();
  }, []);

  return (
    <div className="text-3xl bg-red-500">
      <div>
        <span>Image</span>
      </div>
      <div className="top-blogs flex flex-col items-center gap-8 pt-10 pb-8">
        <h1 className="text-center">Top Blogs</h1>

        <div className="blogs flex flex-wrap justify-center gap-4">
          {blogs.length > 0 &&
            blogs.map((blog) => (
              <div className="blog-card w-[18rem] h-auto bg-pink-50 px-2 py-4 flex flex-col" key={blog?.id}>
                <span className="text-lg font-medium">{blog?.title.substring(0, 10)}</span>
                <span className="text-sm font-light">{blog?.body.substring(0, 100)}</span>
                <button className="bg-blue-400 py-2">Read Blog</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
