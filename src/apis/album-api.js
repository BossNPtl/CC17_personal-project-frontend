import axios from "../config/axios";

const albumApi = {};

albumApi.createAlbum = (body) => axios.post('http://localhost:9690/album/addAlbum', body);
albumApi.getAlbum = () => axios.get('http://localhost:9690/album/:albumId');

export default albumApi;