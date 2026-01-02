import Router from 'koa-router';

const router = new Router();

router.post('/', async (ctx) => {
    try {
      const { num1, num2 } = ctx.request.body;
      const rest = num1 - num2;
      ctx.body = { result: rest };
    } catch (error) {
      ctx.status = 400; //Error del cliente 
      ctx.body = { error: error.message }; 
    }
  });
  
export default router;