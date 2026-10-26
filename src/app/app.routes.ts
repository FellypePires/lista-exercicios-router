import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Home } from './paginas/exercicio1/home/home';
import { Sobre } from './paginas/exercicio1/sobre/sobre';
import { Contato } from './paginas/exercicio1/contato/contato';
import { Galeria } from './paginas/exercicio2/galeria/galeria';
import { DetalheImagem } from './paginas/exercicio2/detalhe-imagem/detalhe-imagem';
import { Login } from './paginas/exercicio3/login/login';
import { Dashboard } from './paginas/exercicio3/dashboard/dashboard';
import { Produtos } from './paginas/exercicio4/produtos/produtos';
import { DetalheProduto } from './paginas/exercicio4/detalhe-produto/detalhe-produto';
import { Noticias } from './paginas/exercicio5/noticias/noticias';
import { DetalheNoticia } from './paginas/exercicio5/detalhe-noticia/detalhe-noticia';
import { DashboardAdmin } from './paginas/exercicio6/dashboard/dashboard';
import { Usuarios } from './paginas/exercicio6/usuarios/usuarios';
import { DetalheUsuario } from './paginas/exercicio6/detalhe-usuario/detalhe-usuario';
import { Relatorios } from './paginas/exercicio6/relatorios/relatorios';
import { Vendas } from './paginas/exercicio6/vendas/vendas';
import { Estoque } from './paginas/exercicio6/estoque/estoque';
import { HomeCursos } from './paginas/exercicio7/home/home';
import { Cursos } from './paginas/exercicio7/cursos/cursos';
import { DetalheCurso } from './paginas/exercicio7/detalhe-curso/detalhe-curso';
import { Professores } from './paginas/exercicio7/professores/professores';
import { DetalheProfessor } from './paginas/exercicio7/detalhe-professor/detalhe-professor';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'lista', component: Inicio },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato },
  { path: 'galeria', component: Galeria },
  { path: 'detalhe', component: DetalheImagem },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'produtos', component: Produtos },
  { path: 'produto', component: DetalheProduto },
  { path: 'noticias', component: Noticias },
  { path: 'detalhe-noticia', component: DetalheNoticia },
  {
    path: 'admin/dashboard',
    component: DashboardAdmin,
    children: [
      { path: 'usuarios', component: Usuarios },
      { path: 'usuarios/detalhe', component: DetalheUsuario },
      { path: 'relatorios', component: Relatorios },
      { path: 'relatorios/vendas', component: Vendas },
      { path: 'relatorios/estoque', component: Estoque }
    ]
  },
  { path: 'cursos-inicio', component: HomeCursos },
  { path: 'cursos', component: Cursos },
  { path: 'cursos/detalhe', component: DetalheCurso },
  { path: 'professores', component: Professores },
  { path: 'professores/detalhe', component: DetalheProfessor },
  { path: '**', redirectTo: '' }
];
