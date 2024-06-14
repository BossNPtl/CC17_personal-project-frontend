/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import albumApi from "../apis/album-api";
import { useEffect } from "react";

export const AlbumContext = createContext();

export default function AlbumContextProvider({ children }) {
    const [isAlbum, setIsAlbum] = useState([]);
    const [isSong, setIsSong] = useState([]);

    useEffect(() => {
        const fetchAllAlbum = async () => {
          try {
            const res = await albumApi.getAllAlbum();
            setIsAlbum(res.data)
          } catch (err) {
            console.log(err)
          }
        }
        fetchAllAlbum();
      }, []);

    const createAlbum = async input => {
        const res = await albumApi.createAlbum(input);
        setIsAlbum(res.data);
    }
    
    const createSong = async (input) => {
        const res = await albumApi.createSong(input);
        setIsSong(res.data);
    }

    const fetchAllSong = async (albumId) => {
        try {
            const res = await albumApi.getAllSong(albumId);
            setIsSong(res.data)
            // console.log('res -->', res)
            // console.log('res.data -->', res.data)
        } catch (err) {
            console.log(err)
        }
        // console.log(isSong);
    }

    return (
        <AlbumContext.Provider value={{ isAlbum, setIsAlbum, createAlbum, isSong, createSong, fetchAllSong }}>
            {children}
        </AlbumContext.Provider>
    );
}