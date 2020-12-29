export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    console.log(`[ROUTE] move to '${to.fullPath}'`)
    next()
  })
}