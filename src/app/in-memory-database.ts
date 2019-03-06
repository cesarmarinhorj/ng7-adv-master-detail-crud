import { InMemoryDbService } from "angular-in-memory-web-api";
import { Categoria } from "./paginas/categorias/shared/models/categoria";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const Categorias: Categoria[] = [
            { id: '1', nome: 'Lazer', descricao: 'descrição da categoria lazer' },
            { id: '2', nome: 'Cozinha', descricao: 'descrição da categoria cozinha' },
            { id: '3', nome: 'Sala', descricao: 'descrição da categoria sala' },
        ];

        return { Categorias };
    }
}