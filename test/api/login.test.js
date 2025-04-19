const pactum = require('pactum');

describe('Testes de API com Pactum', () => {

  it('Deve autenticar o usuário corretamente', async () => {
    await pactum.spec()
      .post("http://lojaebac.ebaconline.art.br/public/authUser")
      .withJson({
        "email": "admin@admin.com",
        "password": "admin123"
      })
      .expectStatus(200)
      .expectJson('success', true);
  });

  it('Deve falhar ao autenticar com credenciais erradas', async () => {
    await pactum.spec()
      .post("http://lojaebac.ebaconline.art.br/public/authUser")
      .withJson({
        "email": "wrong@admin.com",
        "password": "wrongpassword"
      })
      .expectStatus(400) 
      .expectJson('success', false);
  });

});
