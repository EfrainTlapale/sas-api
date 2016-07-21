var app = require('../../app');
var mongoose = require('mongoose');
var should = require('chai').should();
var mockgoose = require('mockgoose');
var supertest = require('supertest');

before((done) => {
  if (mongoose.isMocked) {
    mongoose.unmock(() => { });
  }
  mockgoose(mongoose).then(() => {
    mongoose.connect('mongodb://admin:root@ds023634.mlab.com:23634/escuelatest', (err) => {
      done(err);
    });
  });
});

beforeEach((done) => {
  mockgoose.reset();
  done();
});

var api = supertest(app);

describe('POST /usuario', () => {
  it('Should create a new user when complete information is send', (done) => {
    api.post('/api/usuario')
      .send({
        username: 'mock create',
        nombre: 'Mock',
        apellidos: 'test',
        rol: 'Director',
        email: 'e@mail',
        password: '123345Bos'
      })
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true;
        res.body.user.should.have.property('nombre');
        res.body.user.should.have.property('apellidos');
        done();
      });
  });

  it('Should fail when incomplete information is send', (done) => {
    api.post('/api/usuario')
      .send({
        nombre: 'mock',
        password: 'ncfjnfjod'
      })
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
  });

  it('SHould fail when an invalid rol is send', (done) => {
    api.post('/api/usuario')
      .send({
        username: 'mock create fail',
        nombre: 'Mock',
        apellidos: 'test',
        rol: 'Supremo Lider',
        email: 'e@mail',
        password: '123345Bos',
      })
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
  });

  it('Should fail when no information is send', (done) => {
    api.post('/api/usuario')
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
  });
});