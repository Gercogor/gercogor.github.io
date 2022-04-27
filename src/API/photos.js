import axios from "axios";

export default class PhotoService {
    static async getAll() {
        const response = await axios.get('https://swapi.dev/api/people');
        return response;
    };

    static async getCard(id) {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        return response;
    };


};