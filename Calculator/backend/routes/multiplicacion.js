import Router from 'koa-router';

const router = new Router();

router.get('/:num1/:num2', async (ctx) => {
    const num1 = parseFloat(ctx.params.num1);
    const num2 = parseFloat(ctx.params.num2);
    const mult = num1*num2;
    ctx.body =  mult;
})

export default router;