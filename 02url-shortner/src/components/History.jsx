import React, { useContext } from "react";
import { UrlsContext } from "../context/urlContext";
import HistoryItem from "./HistoryItem";

function History() {
  const { urlsData } = useContext(UrlsContext);

  return (
    <div className="w-3/5 min-h-80 border overflow-y-auto bg-gray-50 px-8 py-4 rounded-box flex flex-col gap-4">
      {urlsData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Label</th>
              <th>Original Url</th>
              <th>Short Url</th>
              <th>Creted At</th>
            </tr>
          </thead>
          <tbody>
            {urlsData.map((url, idx) => (
              <HistoryItem url={url} idx={idx} />
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="text-center font-heading text-3xl">Create your first Short url</h4>
      )}
    </div>
  );
}

export default History;
