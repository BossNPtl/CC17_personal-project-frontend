/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import commentApi from "../apis/comment-api";

export const CommentContext = createContext();

export default function CommentContextProvider({ children }) {
    const [isComment, setIsComment] = useState([]);

    const createComment = async (album_id, input) => {
        try {
            await commentApi.createComment(album_id, input);
        } catch (err) {
            console.log(err)
        }
    }

    const fetchComment = async (albumId, input) => {
        try {
            const res = await commentApi.getAllComment(albumId, input);
            setIsComment(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const editComment = async (id, message) => {
        try {
            await commentApi.editComment(id, message);
        } catch (err) {
            console.log(err)
        }
    }

    const deleteComment = async (id) => {
        try {
            await commentApi.deleteComment(id);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <CommentContext.Provider value={{ isComment, createComment, fetchComment, editComment, deleteComment }}>
            {children}
        </CommentContext.Provider>
    )
}