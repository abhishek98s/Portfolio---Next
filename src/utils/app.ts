const isProd = true;

const env = {
    prod: 'https://production-backend.vercel.app/api',
    local: 'http://localhost:5000/api',
}

export const APP_BASE_URL = isProd ? env.prod : env.local;
