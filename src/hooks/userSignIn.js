/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// แก้ชื่อไฟล์เป็นพิมพ์เล็ก
export default function userSignIn() {
    return useContext(AuthContext);
}