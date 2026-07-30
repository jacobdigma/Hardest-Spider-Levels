import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Packs from './pages/Packs.js'; 
import Updatelog from './pages/Updatelog.js'; // Přidaný import pro updatelog

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/packs', component: Packs }, 
    { path: '/updatelog', component: Updatelog } // Nová cesta pro updatelog
];

