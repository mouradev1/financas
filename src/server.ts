import { App } from './app';
const port = 3005;
new App().server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})