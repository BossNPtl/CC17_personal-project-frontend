import axios from "../config/axios";

const albumApi = {};

albumApi.createAlbum = (body) => axios.post('http://localhost:9690/album/addAlbum', body);
albumApi.createSong = (albumId, body) => axios.post(`http://localhost:9690/album/${albumId}/addSong` ,body);
albumApi.getAllAlbum = () => axios.get('http://localhost:9690/album/allAlbum');
albumApi.getAlbum = (albumId) => axios.get(`http://localhost:9690/album/${albumId}`);
albumApi.getAllSong = (albumId) => axios.get(`http://localhost:9690/album/${albumId}/allSong`);
albumApi.deleteAlbum = (albumId) => axios.patch(`http://localhost:9690/album/${albumId}/deleteAlbum`);

// albumApi.createPicAlbum = formData => axios.create('http://localhost:9690/album/addPicAlbum', formData);

export default albumApi;