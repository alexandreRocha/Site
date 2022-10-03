import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [{
        path: '/',
        name: 'home',
        meta:{
            title: "Página Inicial - CNPD",
            },
        component: HomeView
    },
    {
        path: '/composicao',
        meta:{
            title: "Comnposição - CNPD",
            },
        name: 'ComposicaoView',
        component: () =>
            import ('../views/ComposicaoView.vue')
    },
    {
        path: '/competencias',
        meta:{
            title: "Competências - CNPD",
            },
        name: 'CompetenciaView',
        component: () =>
            import ('../views/CompetenciasView.vue')
    },
    {
        path: '/contato',
        name: 'ContatoView',
        meta:{
           title: "Contato - CNPD",
        },
        component: () =>
            import ('../views/ContatoView.vue')
    },
    {
        path: '/queixa',
        name: 'QueixaView',
        meta:{
           title: "Queixa - CNPD",
        },
        component: () =>
            import ('../views/QueixaView.vue')
    },
    {
        path: '/historia',
        meta:{
            title: "História - CNPD",
            },
        name: 'HistoriaView',
        component: () =>
            import ('../views/HistoriaView.vue')
    },
    {
        path: '/boasvindas',
        meta:{
            title: "Boasvindas - CNPD",
            },
        name: 'BoasVindasView',
        component: () =>
            import ('../views/BoasVindasView.vue')
    },
    {
        path: '/autorizacoes',
        meta:{
            title: "Autorizações - CNPD",
            },
        name: 'AutorizacoesView',
        component: () =>
            import ('../views/AutorizacoesView.vue')
    },
    {
        path: '/registos',
        meta:{
            title: "Registos - CNPD",
            },
        name: 'RegistosView',
        component: () =>
            import ('../views/RegistosView.vue')
    },
    {
        path: '/pareceres',
        meta:{
            title: "Pareceres - CNPD",
            },
        name: 'PareceresView',
        component: () =>
            import ('../views/PareceresView.vue')
    },
    {
        path: '/deliberacoes',
        meta:{
            title: "Deliberações - CNPD",
            },
        name: 'DeliberacoesView',
        component: () =>
            import ('../views/DeliberacoesView.vue')
    },
    {
        path: '/diretivas',
        meta:{
            title: "Diretivas - CNPD",
            },
        name: 'DiretivasView',
        component: () =>
            import ('../views/DiretivasView.vue')
    },
    {
        path: '/planos',
        meta:{
            title: "Planos - CNPD",
            },
        name: 'PlanosView',
        component: () =>
            import ('../views/PlanosView.vue')
    },
    {
        path: '/relatorios',
        meta:{
            title: "Relatórios - CNPD",
            },
        name: 'RelatoriosView',
        component: () =>
            import ('../views/RelatoriosView.vue')
    },
    {
        path: "/autoview/:id",
        meta:{
            title: "Autorização ID - CNPD",
            },
        name: 'autoview',
        component: () =>
            import ('../views/AutoView.vue')
    },
    {
        path: "/regisview/:id",
        meta:{
            title: "Registo ID - CNPD",
            },
        name: 'regisview',
        component: () =>
            import ('../views/RegisView.vue')
    },
    {
        path: "/parecerview/:id",
        meta:{
            title: "Parecer ID - CNPD",
            },
        name: 'parecerview',
        component: () =>
            import ('../views/ParecerView.vue')
    },
    {
        path: "/deliberaview/:id",
        meta:{
            title: "Deliberação ID - CNPD",
            },
        name: 'deliberaview',
        component: () =>
            import ('../views/DeliberaView.vue')
    },
    {
        path: "/diretivaview/:id",
        meta:{
            title: "Diretiva ID - CNPD",
            },
        name: 'diretivaview',
        component: () =>
            import ('../views/Diretivaview.vue')
    },
    {
        path: "/planoview/:id",
        meta:{
            title: "Plano ID - CNPD",
            },
        name: 'planoview',
        component: () =>
            import ('../views/PlanoView.vue')
    },

    {
        path: "/relatorioView/:id",
        meta:{
            title: "Relatório ID - CNPD",
            },
        name: 'relatorioView',
        component: () =>
            import ('../views/RelatorioView.vue')
    },
    {
        path: '/eventview/:id',
        meta:{
            title: "Eventos ID - CNPD",
            },
        name: 'eventview',
        component: () =>
            import ('../views/EventView.vue')
    },
    {
        path: '/formularios',
        meta:{
            title: "Formulários - CNPD",
            },
        name: 'FormulariosView',
        component: () =>
            import ('../views/FormulariosView.vue')
    },
    {
        path: '/taxas',
        meta:{
            title: "Taxas",
            },
        name: 'TaxaView',
        component: () =>
            import ('../views/TaxaView.vue')
    },
    {
       path: '/conselhos',
       meta:{
        title: "Conselhos",
        },
        name: 'ConselhoPraticoView',
        component: () =>
            import ('../views/ConselhoPraticoView.vue')

    },
    {
        path: '/direitos',
        meta:{
            title: "Direitos",
            },
         name: 'DireitosTitularesView',
         component: () =>
             import ('../views/DireitosTitularesView.vue')
 
     },
    {
        path: '/legislacao',
        meta:{
        title: "Legislação - CNPD",
        },
        name: 'LegislacaoView',
        component: () =>
            import ('../views/LegislacaoView.vue')
    },
    {
        path: '/leiview/:id',
        meta:{
            title: "Lei Nº - CNPD",
            },
        name: 'leiview',
        component: () =>
            import ('../views/LeiView.vue')
    },
    {
        path: '/noticias',
        meta:{
            title: "Notícias - CNPD",
            },
        name: 'NoticiasView',
        component: () =>
            import ('../views/NoticiasView.vue')
    },
    {
        path: '/formscctv',
        meta:{
            title: "VIDEOVIGILÂNCIA - CNPD",
            },
        name: 'FormscctvView',
        component: () =>
            import ('../views/FormscctvView.vue')
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next)=> {document.title =`${to.meta.title}`;
next();
});
 

export default router