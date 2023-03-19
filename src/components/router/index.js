import VueRouter from 'vue-router';
import Vue from 'vue';

import RegisterUser from '../RegisterUser';
import Login from '../Login';
import Home from '../Home';
import Electronics from '../Electronics';
import Automobiles from '../Automobiles';
import Clothing from '../Clothing';
import AddProduct from '../AddProduct';
import HouseHold from '../HouseHold';
import Others from '../Others';
import Forgetpassowrd from '../Forgetpassword';
import BuyElectronics from '../BuyElectronics';
import BuyClothing from '../BuyClothing';
import BuyAutomobiles from '../BuyAutomobiles';
import BuyHousehold from '../BuyHousehold';
import BuyMiscellenous from '../BuyMiscellenous';
import UserAds from '../UserAds';
import MyAccount from '../MyAccount';
import UpdateElectronics from '../UpdateElectronics';
import UpdateClothing from '../UpdateClothing';
import UpdateHousehold from '../UpdateHousehold';
import UpdateAutomobiles from '../UpdateAutomobiles';
import UpdateOthers from '../UpdateOthers';

Vue.use(VueRouter);

const routes = [
    {
        path: "/register",
        component: RegisterUser,
    },
    {
        path: "/",
        component: Login,
    },
    {
        path: "/Home",
        component: Home,
    },
    {
        path: "/Electronics",
        component: Electronics,
    },
    {
        path: "/AddProduct",
        component: AddProduct,
    },
    {
        path: "/Clothing",
        component: Clothing,
    },
    {
        path: "/Automobiles",
        component: Automobiles,
    },
    {
        path: "/HouseHold",
        component: HouseHold,
    },
    {
        path: "/Others",
        component: Others
    },
    {
        path: "/Forgetpassword",
        component: Forgetpassowrd
    },
    {
        path: "/BuyElectronics",
        component: BuyElectronics
    },
    {
        path: "/BuyClothing",
        component: BuyClothing
    },
    {
        path: "/BuyAutomobiles",
        component: BuyAutomobiles  

    },
    {
        path: "/BuyHousehold",
        component: BuyHousehold  

    }, 
    {
        path: "/BuyMiscellenous",
        component: BuyMiscellenous

    }, 
    {
        path:"/Ads",
        component: UserAds
    },
    {
        path:"/MyAccount",
        component: MyAccount
    },
    {
        path:"/UpdateElectronics",
        component: UpdateElectronics
    },
    {
        path:"/UpdateClothing",
        component: UpdateClothing
    },
    {
        path:"/UpdateAutomobiles",
        component: UpdateAutomobiles
    },
    {
        path:"/UpdateHousehold",
        component: UpdateHousehold
    },
    {
        path:"/UpdateOthers",
        component: UpdateOthers
    },


   


    
    
]


const router = new VueRouter({
    routes,
});


export default router;