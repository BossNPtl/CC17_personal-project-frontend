import axios from "../config/axios";

const albumApi = {};

albumApi.createAlbum = (body) => axios.post('http://localhost:9690/album/addAlbum', body);
albumApi.createSong = (body) => axios.post('http://localhost:9690/album/:albumId/addSong' ,body);
albumApi.getAllAlbum = () => axios.get('http://localhost:9690/album/allAlbum');
albumApi.getAlbum = (albumId) => axios.get(`http://localhost:9690/album/${albumId}`);
albumApi.getSong = (albumId) => axios.get(`http://localhost:9690/album/${albumId}/allSong`);

export default albumApi;