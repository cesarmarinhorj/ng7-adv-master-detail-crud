import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {
    createDb(){
        const Categorias = [
            { id: 1, nome: 'Lazer', descricao: 'descrição da categoria lazer' },
            { id: 2, nome: 'Cozinha', descricao: 'descrição da categoria cozinha' },
            { id: 3, nome: 'Sala', descricao: 'descrição da categoria sala' },
        ];

        return { Categorias };
    }
}