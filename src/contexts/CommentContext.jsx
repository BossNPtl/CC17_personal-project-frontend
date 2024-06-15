/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import commentApi from "../apis/comment-api";

export const CommentContext = createContext();

export default function CommentContextProvider({ children }) {
    const [isComment, setIsComment] = useState([]);
    
    const createComment = async (input) => {
        try {
            const res = await commentApi.createComment(input);
            setIsComment(res.data);
        }   catch (err) {
            console.log(err)
        }
    }

    const fetchComment = async (albumId) => {
        try {
            const res = await commentApi.getAllComment(albumId);
            setIsComment(res.data);
        }   catch (err) {
            console.log(err);
        }
    }

    const editComment = async (id) => {
        try {
            const res = await commentApi.editComment(id);
            setIsComment(res.data);
        }   catch (err) {
            console.log(err)
        }
    }

    const deleteComment = async (id) => {
        try {
            const res = await commentApi.deleteComment(id);
            setIsComment(res.data);
        }   catch (err) {
            console.log(err)
        }
    }

    return (
        <CommentContext.Provider value={{ isComment, createComment, fetchComment, editComment, deleteComment }}>
            {children}
        </CommentContext.Provider>
    )
}