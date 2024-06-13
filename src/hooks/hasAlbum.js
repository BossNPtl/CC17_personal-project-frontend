import { useContext } from "react";
import { AlbumContext } from "../contexts/AlbumContext";

export default function HasAlbum() {
    return useContext(AlbumContext)
}