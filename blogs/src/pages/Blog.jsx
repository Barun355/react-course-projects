import React, { useEffect, useState } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []); // [] Dependencies Array

  return (
    <div className="bg-red-400">
      <h1 className="text-4xl font-bold text-center pt-10 pb-4">Blog</h1>

      <div className="blog-container px-10 flex justify-center flex-wrap gap-4 pb-10">
        {blogs.length > 0 ?
          blogs.map((item) => (
            <div className="blog-card w-[18rem] h-auto bg-pink-50 px-2 py-4 flex flex-col" key={item.id}>
              <span className="text-lg font-medium">{item.title.substring(0, 10)}</span>
              <span className="text-sm font-light">{item.body.substring(0, 100)}...</span>
              <button className="bg-blue-400 py-2">Read Blog</button>
            </div>
          )): (
            <span>Getting data</span>
          )
        }
      </div>
    </div>
  );
}

export default Blog;
