import Tarefa from '../models/tarefa';
import firebase from 'firebase';
import 'firebase/firestore'; //Não precisa no Ionic ou Web


/**
 * Classe que dá acesso ao servidor com os dados da Tarefas
 */
class TarefasProvider {

    private userID: string;
    private db: firebase.firestore.CollectionReference;

    constructor() {
        this.userID = firebase.auth().currentUser.uid;
        this.db = firebase.firestore().collection('tarefas');
    }
  
    /**
     * Cadastra um novo usuário
     * @param tarefa 
     */
    cadastrar(tarefa: Tarefa) {
        let doc = this.db.doc();
        tarefa.usuarioID = this.userID;
        tarefa.id = doc.id;
        if (!tarefa.imagem) delete tarefa.imagem
        doc.set(tarefa);
    }
  
    /**
     * Edita uma tarefa
     * @param tarefa 
     */
    editar(tarefa: Tarefa) {
        this.db.doc(tarefa.id).set(tarefa);
    }
  
    /**
     * Exclui uma tarefa
     * @param id 
     */
    excluir (id: string) {
        this.db.doc(id).delete();
    }
  
    /**
     * BUsca todas tarefas de um usuário
     */
    async buscarTodos(): Promise<Tarefa[]> {
        let resultado = await this.db.where('usuarioID', '==', this.userID).get();
        let tarefas = [];
        resultado.forEach(tarefa => {
            tarefas.push(tarefa.data())
        })
        return tarefas;
    }
  
    /**
     * Retorna a tarefa com ID informado
     * @param id 
     */
    async buscar(id: string): Promise<Tarefa> {
        let resultado = await this.db.doc(id).get();
        let tarefa = null
        if (resultado.exists) tarefa = resultado.data();
        return tarefa;
    }
}
  
export const TarefaProvider = new TarefasProvider()