import Axios from 'axios';
import { AsyncStorage } from 'react-native';


export abstract class APIProviders {

    protected api = Axios.create({
        baseURL:'http://cwg-ws.herokuapp.com/api/'
    });

    /** Adiciona o Token ao Headers */
    protected async getToken() {
        this.api.defaults.headers.common['Authorization'] = await AsyncStorage.getItem('token');
    }

}