var app = require('../../app');
var mongoose = require('mongoose');
var should = require('chai').should();
var mockgoose = require('mockgoose');
var supertest = require('supertest');
var User = require('../../models/user');

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

describe('POST /usuario/auth', () => {
  it('Should return a token if the username and password are correct', (done) => {
    User.create({
      username: 'mockauth',
      nombre: 'Mock',
      apellidos: 'test',
      rol: 'Director',
      email: 'e@mail',
      password: '123456'
    }, (err) => {
      if (err) return done(err);

      api.post('/api/usuario/auth')
      .send({
        username: 'mockauth',
        password: '123456'
      })
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true;
        res.body.should.have.property('token');
        done();
      });
    });
  });

  it('Should fail if user is not found', (done) => {
    User.create({
      username: 'mockauth',
      nombre: 'Mock',
      apellidos: 'test',
      rol: 'Director',
      email: 'e@mail',
      password: '123456'
    }, (err) => {
      if (err) return done(err);

      api.post('/api/usuario/auth')
      .send({
        username: 'mockauth25',
        password: '123456'
      })
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
    });
  });

  it('Should fail if password is incorrect', (done) => {
    User.create({
      username: 'mockauth',
      nombre: 'Mock',
      apellidos: 'test',
      rol: 'Director',
      email: 'e@mail',
      password: '123456'
    }, (err) => {
      if (err) return done(err);

      api.post('/api/usuario/auth')
      .send({
        username: 'mockauth',
        password: 'ultrasecurepassword'
      })
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
    });
  });

});