// Importa a biblioteca 'axios', que é usada para fazer requisições HTTP de forma mais simples
import axios from "axios";

// Define a porta onde a API local está rodando
const apiPort = "5063";

// Monta a URL base para a API local, usando a porta definida
const localApi = `http://localhost:${apiPort}/api`;

// Define uma variável para uma API externa, mas no momento ela está como 'null' (não sendo usada)
const externalApi = null;

// Cria uma instância do axios configurada com a URL base apontando para a API local
const api = axios.create({
    baseURL : localApi
});

// Exporta a instância do axios para ser usada em outros arquivos do projeto
export default api;
