# GESCOL
Sistema de gereciamento escolar.

## Gestão
### Requisitos funcionais (o que a API deve fazer)

- [ ] Autenticar usuários (registro/login) e emitir JWT.
- [ ] Controlar acesso por papéis: Admin, Instructor, Student.
- [ ] Cursos: criar (Admin/Instructor), listar com paginação e filtros (público), detalhar (público), - [] atualizar (Admin/Instructor), remover (Admin).
- [ ] Estudantes: criar perfil vinculado ao usuário (Admin), listar (Admin), detalhar/atualizar (Admin ou o próprio), desativar/remover (Admin).
- [ ] Matrículas: matricular estudante autenticado em curso, impedir matrícula duplicada, listar  matrículas do próprio estudante (ou Admin).
- [ ] Validações: título de curso ≥ 3 caracteres; e-mail de estudante válido e único.
- [ ] Erros padronizados com status e mensagem clara.
- [ ] Documentação: Swagger com esquema Bearer e exemplos; README com como rodar/testar/autenticar.

### Requisitos técnicos (como o projeto deve ser construído)

- [ ] .NET 8 + ASP.NET Core Web API (Controllers ou Minimal APIs).
- [ ] EF Core para persistência (SQLite em dev; SQL Server/Postgres em ambientes maiores).
- [ ] ASP.NET Core Identity + JWT Bearer.
- [ ] Configurações por variáveis de ambiente/user-secrets; nenhum segredo no repositório.
- [ ] Migrations aplicadas e seed mínimo (papéis + usuário admin) de forma idempotente.
- [ ] Índices/constraints: e-mail único; unicidade de matrícula (student+course).
- [ ] DTOs separados das entidades; paginação e filtros via query string documentados.
- [ ] Swagger/OpenAPI com Security Scheme Bearer.
- [ ] Repositório GitHub com README de setup/execução.
- [ ] HTTPS habilitado e CORS restrito às origens necessárias.


## Proposta de Arquitetura

```
gescol/
├── client/ # Aplicação React (frontend)
│ ├── src/
│ │ ├── components/ # Componentes reutilizáveis
│ │ ├── pages/ # Páginas da aplicação
│ │ ├── services/ # Comunicação com API
│ │ ├── hooks/ # Custom hooks
│ │ ├── context/ # Context API
│ │ └── utils/ # Funções auxiliares
│ └── public/
│
├── server/ # API .NET (backend)
│ ├── src/
│ │ ├── Gescol.API/ # Projeto principal da API
│ │ │ ├── Controllers/ # Controladores API
│ │ │ ├── Models/ # ViewModels/DTOs
│ │ │ ├── Services/ # Serviços de aplicação
│ │ │ ├── Middleware/ # Middlewares customizados
│ │ │ ├── Filters/ # Filtros de ação
│ │ │ └── Program.cs # Ponto de entrada
│ │ │
│ │ ├── Gescol.Core/ # Camada de domínio
│ │ │ ├── Entities/ # Entidades de domínio
│ │ │ ├── Interfaces/ # Interfaces de repositório
│ │ │ ├── Services/ # Serviços de domínio
│ │ │ └── Specifications/ # Padrão Specification
│ │ │
│ │ ├── Gescol.Infrastructure/ # Camada de infraestrutura
│ │ │ ├── Data/ # Contexto EF e configurações
│ │ │ ├── Repositories/ # Implementações de repositório
│ │ │ ├── Migrations/ # Migrações do banco
│ │ │ └── Identity/ # Configuração de autenticação
│ │ │
│ │ └── Gescol.Tests/ # Projeto de testes
│ │
│ ├── Gescol.sln # Solução .NET
│ └── docker-compose.yml # Docker para PostgreSQL
│
├── shared/ # Código compartilhado (opcional)
│
└── README.md
```
