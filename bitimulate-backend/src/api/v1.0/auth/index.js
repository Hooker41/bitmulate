const Router = require('koa-router');

const auth = new Router();
const authCtrl = require('./auth.ctrl');

auth.get('/', (ctx) => {
    ctx.body = 'Router Setting Finished!';
})

auth.post('/register', authCtrl.register);
module.exports = auth;