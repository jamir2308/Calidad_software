const request = require('supertest');
const { app, validarEmail } = require('./app');

describe('Pruebas para validarEmail', () => {
  test('Debe retornar true para un email válido', () => {
    expect(validarEmail('ejemplo@correo.com')).toBe(true);
  });

  test('Debe retornar false para un email no válido', () => {
    expect(validarEmail('ejemplo.com')).toBe(false);
  });
});

describe('Pruebas de endpoint /validar-email', () => {
  test('Debe responder con 200 para un email válido', async () => {
    const response = await request(app).post('/validar-email').send({email: 'ejemplo@correo.com'});
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Email válido');
  });

  test('Debe responder con 400 para un email no válido', async () => {
    const response = await request(app).post('/validar-email').send({email: 'ejemplo.com'});
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Email no válido');
  });
});
