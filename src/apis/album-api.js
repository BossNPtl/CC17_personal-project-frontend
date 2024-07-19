import axios from "../config/axios";

const albumApi = {};


albumApi.createAlbum = (body) => axios.post('/album/addAlbum', body);
albumApi.createSong = (albumId, body) => axios.post(`/album/${albumId}/addSong` ,body);
albumApi.getAllAlbum = () => axios.get('/album/allAlbum');
albumApi.getAlbum = (albumId) => axios.get(`/album/${albumId}`);
albumApi.getAllSong = (albumId) => axios.get(`/album/${albumId}/allSong`);
albumApi.editSong = (songId, body) => axios.get(`/album/song/${songId}`, body);
albumApi.deleteAlbum = (albumId) => axios.patch(`/album/${albumId}/deleteAlbum`);

// albumApi.createPicAlbum = formData => axios.create('http://localhost:9690/album/addPicAlbum', formData);

export default albumApi;