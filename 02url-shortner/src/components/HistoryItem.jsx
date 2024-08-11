import React from "react";

function HistoryItem({ url, idx }) {
    function redirect(){
        window.open(url.longUrl, "_blank")
    }
  return (
    <tr className="hover">
      <th>{idx + 1}</th>
      <td>{url.label}</td>
      <td>{url.longUrl.substring(0, 20)}</td>
      <td className="w-36 cursor-pointer" onClick={redirect}>{url.shortUrl}</td>
      <td>{url.createdAt}</td>
    </tr>
  );
}

export default HistoryItem;
