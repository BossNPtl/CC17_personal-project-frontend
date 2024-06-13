/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import albumApi from "../apis/album-api";

export const AlbumContext = createContext();

export default function AlbumContextProvider({ children }) {
    const [isAlbum, setIsAlbum] = useState(null);

    // useEffect(() => {
    //     const fetchAllAlbum = async () => {
    //         try {
    //             const res = await albumApi.getAllAlbum();
    //             setIsAlbum(res.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //         console.log(isAlbum);
    //     }
    //     fetchAllAlbum();
    // }, []);

    const createAlbum = async input => {
        const res = await albumApi.createAlbum(input);
        setIsAlbum(res.data);
    }
    
    return (
        <AlbumContext.Provider value={{ isAlbum, setIsAlbum, createAlbum }}>
            {children}
        </AlbumContext.Provider>
    );
}