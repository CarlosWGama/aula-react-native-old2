import Tarefa from '../models/tarefa';
import { APIProviders } from './api';

/**
 * Classe que dá acesso ao servidor com os dados da Tarefas
 */
class TarefasProvider extends APIProviders {
  
    /**
     * Cadastra um novo usuário
     * @param tarefa 
     */
    async cadastrar(tarefa: Tarefa) {
        console.log({tarefa});
        await this.getToken()
        this.api.post("/tarefas", {tarefa}).catch(erro => {
            console.log(erro.response.data)
        })
    }
  
    /**
     * Edita uma tarefa
     * @param tarefa 
     */
    async editar(tarefa: Tarefa) {
        await this.getToken()
        this.api.put("/tarefas/"+tarefa.id, {tarefa})
    }
  
    /**
     * Exclui uma tarefa
     * @param id 
     */
    async excluir (id: string) {
        await this.getToken()
        this.api.delete("/tarefas/"+id)
    }
  
    /**
     * BUsca todas tarefas de um usuário
     */
    async buscarTodos(): Promise<Tarefa[]> {
        await this.getToken();
        let response = await this.api.get("/tarefas");
        return response.data;
    }
  
    /**
     * Retorna a tarefa com ID informado
     * @param id 
     */
    async buscar(id: string): Promise<Tarefa> {
        await this.getToken();
        let response = await this.api.get("/tarefas/"+id);
        return response.data;
    }
  }
  
export const TarefaProvider = new TarefasProvider();