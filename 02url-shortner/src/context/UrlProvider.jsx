import React, { useState } from 'react'
import { UrlsContext } from './urlContext'

function UrlProvider({children}) {
    const [urlsData, setUrlsData]  = useState([])

    function addUrl(label, longUrl, shortUrl){
        setUrlsData(prev => [...prev, {id: Date.now, label, longUrl, shortUrl, createdAt: new Date().toUTCString()}])
    }

  return (
    <UrlsContext.Provider value={{urlsData, addUrl}}>
      {children}
    </UrlsContext.Provider>
  )
}

export default UrlProvider;
