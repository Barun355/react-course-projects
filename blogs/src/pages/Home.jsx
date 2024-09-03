import React from "react";

function Home() {

  return (
    <div className="text-3xl bg-red-500">
      <div>
        <span>Image</span>
      </div>
      <div className="top-blogs flex flex-col items-center gap-8 pt-10 pb-8">
        <h1 className="text-center">Top Blogs</h1>

        <div className="blogs flex flex-wrap justify-center">
          <div className="blog-card w-[18rem] h-auto bg-pink-50 px-2 py-4 flex flex-col">
            <span className="text-lg font-medium">Title</span>
            <span className="text-sm font-light"> Body </span>
            <button className="bg-blue-400 py-2">Read Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
