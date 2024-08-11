import React, { useContext, useState } from "react";
import { UrlsContext } from "../context/urlContext";
import { randomLink } from "../utils";

function Generate() {

  const [label, setLabel] = useState('')
  const [longUrl, setLongUrl] = useState('')
  const { addUrl } = useContext(UrlsContext)

  const handleSubmit = e => {
    e.preventDefault();
    addUrl(label, longUrl, randomLink())
    setLabel('')
    setLongUrl('')
  }

  return (
    <div className="w-3/5 h-fit bg-gray-50 border px-8 py-4 rounded-box">
      <form className="h-full flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex justify-start gap-2">
          <input
            type="text"
            placeholder="label"
            value={label}
            required
            onChange={e => setLabel(e.target.value)}
            className="rounded-btn px-4 py-2 outline-none border border-slate-300"
          />
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            value={longUrl}
            required
            placeholder="Enter your long url"
            onChange={e => setLongUrl(e.target.value)}
            className="border border-slate-300 rounded-btn w-full h-fit py-3 pl-4 pr-8 outline-none"
          />
          <button className="btn btn-primary" type="submit">Short</button>
        </div>
      </form>
    </div>
  );
}

export default Generate;
