import Tarefa from '../models/tarefa';
import * as firebase from 'firebase';
import 'firebase/database';

/**
 * Classe que dá acesso ao servidor com os dados da Tarefas
 */
class TarefasProvider {

    private userID:string;
    private db: firebase.database.Reference;

    constructor() {
        this.userID = firebase.auth().currentUser?.uid;
        this.db = firebase.database().ref('tarefas').child(this.userID);
    }
  
    /**
     * Cadastra um novo usuário
     * @param tarefa 
     */
    cadastrar(tarefa: Tarefa) {
        tarefa.id = this.db.push().key;
        tarefa.usuarioID = this.userID;
        this.db.child(tarefa.id).set(tarefa);
    }
  
    /**
     * Edita uma tarefa
     * @param tarefa 
     */
    editar(tarefa: Tarefa) {
        this.db.child(tarefa.id).set(tarefa);
    }
  
    /**
     * Exclui uma tarefa
     * @param id 
     */
    excluir (id: string) {
        this.db.child(id).remove();
    }
  
    /**
     * BUsca todas tarefas de um usuário
     */
    async buscarTodos(): Promise<Tarefa[]> {
        let snapshot = await this.db.once('value');
        let tarefas: Tarefa[] = [];
        snapshot.forEach(tarefa => {
            tarefas.push(tarefa.val())
        });
        return tarefas;
    }
  
    /**
     * Retorna a tarefa com ID informado
     * @param id 
     */
    async buscar(id: string): Promise<Tarefa> {
        let snapshot = await this.db.child(id).once('value');
        return snapshot.val();
    }
}

export const TarefaProvider = new TarefasProvider();
  
