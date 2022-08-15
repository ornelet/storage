import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';
import Koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// App components
const app = new Koa();
const router = new Router();
const port = 8080;

app.use(serve(join(__dirname, 'dist')));
app.use(bodyParser());

const products = [
  {
    name: 'VEKTOR LS направляющие 500 мм, ниж. крепления, полн. выдвижения, плав. закрывания',
    article: 'LS500'
  },
  {
    name: 'Профиль-ручка 192мм крепление саморезами алюминий матовый',
    article: 'PH.RU01.192.AL'
  },
  {
    name: 'PARTNER Корзина-посудосушитель 600 мм, с алюм. поддоном, креп. фасадов, направляющие плавного закрывания',
    article: 'KCCPSTHM260PACSI'
  }
];

router.
  get('/products', (ctx, next) => {
    ctx.body = db.data.products || '[]';
  })
  .post('/products', (ctx, next) => {
    ctx.body = 'POST';
    if (!db.data) db.data = { products: [] };
    db.data.products.push({
      name: ''
    });
  })
  .del('/products/:id', (ctx, next) => {
    ctx.body = 'DELETE';
  });

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});