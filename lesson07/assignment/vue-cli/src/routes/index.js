import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Pricing from '../components/Pricing';
import HandMadeCards from '../components/HandMadeCards';
import CardGrid from '../components/CardGrid';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing
    }, {
        path: '/cards',
        name: 'HandMadeCards',
        component: HandMadeCards
    }, {
        path: '/grid',
        name: 'CardGrid',
        component: CardGrid
    }]
});