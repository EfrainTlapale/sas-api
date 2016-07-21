var app = require('../../app');
var mongoose = require('mongoose');
var should = require('chai').should();
var mockgoose = require('mockgoose');
var supertest = require('supertest');
var User = require('../../models/user');
var jwt = require('jsonwebtoken');
var config = require('../../config');

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

var id = mongoose.Types.ObjectId();
beforeEach((done) => {
  mockgoose.reset();

  User.create({
    _id: id,
    username: 'mock update',
    nombre: 'Mock',
    apellidos: 'test',
    rol: 'Director',
    email: 'e@mail',
    password: '123345Bos'
  }, (err) => {
    if (err) return done(err);
    done();
  });
});

var api = supertest(app);
var token = jwt.sign('Hola Mundo', config.st);

describe('PUT /usuario/:id', () => {
  it('Should fail if no acces token is send', (done) => {
    api.put('/api/usuario/' + id)
      .send({
        nombre: 'Mock Modified'
      })
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
  });

  it('Should update the information of a user when a valid fiel is send', (done) => {
    api.put('/api/usuario/' + id)
      .set('x-access-token', token)
      .send({
        nombre: 'Mock Modified'
      })
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true;
        res.body.user.nombre.should.deep.equal('Mock Modified');
        done();
      });
  });

  it('Should fail when the given id is not in the db', (done) => {
    api.put('/api/usuario/' + '1213yev32hj3h2jv') //Random number
      .set('x-access-token', token)
      .send({
        nombre: 'Mock Modified'
      })
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
  });
}); 