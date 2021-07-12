const Fastify = require('fastify');

const main = async () => {
  const fastify = Fastify({
    logger: true,
  });

    fastify.get('/helloworld/:name', async (request, reply) => {
    var name = request.params.name
    //reply.send("Hello, ", ${request.params.name})	    
    return {
      response: 'Hello, '+request.params.name,
    };
  });

  await fastify.listen(
    process.env.HTTP_LISTENING_PORT || 3000,
    process.env.HTTP_LISTENING_ADDRESS || '::'
  );
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
