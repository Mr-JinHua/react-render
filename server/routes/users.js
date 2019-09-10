const router = require('koa-router')()
const dirTree = require("directory-tree")

const tree = dirTree("/some/path");
console.log(tree);

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/honor', async(ctx, next) => {
  ctx.body = tree;
})

module.exports = router
