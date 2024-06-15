import axios from '../config/axios';

const commentApi = {};

commentApi.createComment = (albumId, body) => axios.post(`http://localhost:9690/comment/${albumId}/postComment`, body);
commentApi.getAllComment = (albumId) => axios.get(`http://localhost:9690/comment/${albumId}/fetchComment`);
commentApi.editComment = (id, body) => axios.patch(`http://localhost:9690/comment/${id}/editComment`, body);
commentApi.deleteComment = (id) => axios.patch(`http://localhost:9690/comment/${id},deleteComment`);

export default commentApi;