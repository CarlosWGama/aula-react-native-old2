import { APIProviders } from "./api";
import { AsyncStorage } from "react-native";

/**
 * Classe Responsável por acessar os dados do usuário no WebService
 */
class UsuariosProviders extends APIProviders {

    /** 
     * Cadastra um novo usuário
     * @param dados {nome:string, email:string, senha:string} 
     */
    public async cadastrar(dados): Promise<boolean> {
        return this.api.post('/usuarios', {"usuario":dados}).then(response => {
            return true;
        }).catch(erro => {
            return false;
        })
    }

    /** 
     * Loga o usuário ao WebService 
     * @param email string
     * @param senha string
     */
    public async logar(email, senha): Promise<boolean> {
        return this.api.post('/login', {email, senha}).then(response => {
            AsyncStorage.setItem('token', response.data.jwt)
            return true;
        }).catch(erro => {
            return false;
        })
    }

    /**
     * Desloga o usuário removendo seu token
     */
    public async logout() {
        AsyncStorage.removeItem('token');
    }
}

export const UsuarioProvider = new UsuariosProviders();