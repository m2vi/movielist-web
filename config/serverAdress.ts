import config from './config.json';

const devUrl: string = config.server.url.development;
const prodUrl: string = config.server.url.production;

const isDev: boolean = process.env.NODE_ENV !== 'production';

export const server: string = isDev ? devUrl : prodUrl;
