// home page apis

import server from 'plug/axios';

export const homeData = () => server.get('/home/data');
