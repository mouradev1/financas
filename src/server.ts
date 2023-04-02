import { App } from './app';
const port = 3000;
new App().server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})