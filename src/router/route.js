/**
 *  路由配置
 */
import Developer from '../pages/Developer';
import Home from '../pages/home';
import {  About ,Topic,Topics } from '../pages/component';
const router = [
  {path:'/',component:Home,exact:true},
  {path:'/about',component:Home},
  {path:'/topics',component:Topics},
  {path:'/developer',component: Developer},
];

export default router;
