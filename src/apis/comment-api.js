import axios from '../config/axios';

const commentApi = {};

commentApi.createComment = (albumId, body) => axios.post(`http://localhost:9690/comment/${albumId}/addComment`, body);
commentApi.getAllComment = (albumId) => axios.post(`http://localhost:9690/comment/${albumId}/allComment`);
commentApi.editComment = (id, body) => axios.post(`http://localhost:9690/comment/${id}/edit`, body);
commentApi.deleteComment = (id) => axios.post(`http://localhost:9690/comment/${id},delete`);

export default commentApi;