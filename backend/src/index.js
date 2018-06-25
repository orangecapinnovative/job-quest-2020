const fastify = require('fastify')()

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
fastify.listen(3030 ,'0.0.0.0' ,(err , addess)=>{
    if(err){
        console.log(err)
    }

    console.log('running')
})