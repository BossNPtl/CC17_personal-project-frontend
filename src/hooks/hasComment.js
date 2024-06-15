import { useContext } from "react";
import { CommentContext } from "../contexts/CommentContext";

export default function HasComment() {
    return useContext(CommentContext)
}