import axios from "axios";

export default class FetchService {
    static async getAll() {
        const response = await axios.get('https://swapi.dev/api/people');
        return response;
    };

    static async getSWCard(id) {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        return response;
    };

    static async getPhotos() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/album/1/photos');
        return response;
    };

    static async getPhotoCard(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        return response;
    };


};