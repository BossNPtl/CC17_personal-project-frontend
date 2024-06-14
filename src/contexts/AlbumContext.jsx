/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import albumApi from "../apis/album-api";

export const AlbumContext = createContext();

export default function AlbumContextProvider({ children }) {
    const [isAlbum, setIsAlbum] = useState(null);
    const [isSong, setIsSong] = useState(null);

    const createAlbum = async input => {
        const res = await albumApi.createAlbum(input);
        setIsAlbum(res.data);
    }
    
    const createSong = async (input) => {
        const res = await albumApi.createSong(input);
        setIsSong(res.data);
    }
    
    return (
        <AlbumContext.Provider value={{ isAlbum, setIsAlbum, createAlbum, isSong, createSong }}>
            {children}
        </AlbumContext.Provider>
    );
}