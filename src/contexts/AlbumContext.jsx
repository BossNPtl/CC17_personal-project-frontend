/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import albumApi from "../apis/album-api";

const AlbumContext = createContext();

export default function AlbumContextProvider({ children }) {
    const [isAlbum, setIsAlbum] = useState(null);

    const fetchAlbum = async () => {
        try {
            const res = await albumApi.getAlbum();
            setIsAlbum(res.data)
            console.log(res)
        }   catch (err) {
            console.log(err)
        }
        
    };
    
    return (
        <AlbumContext.Provider 
        value={{ fetchAlbum, isAlbum }}
        >
            {children}
        </AlbumContext.Provider>
    );
}