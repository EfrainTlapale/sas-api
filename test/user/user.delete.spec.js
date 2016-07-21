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
    username: 'mockdel',
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

describe('DELETE /usuario/:id', () => {
  it('Should fail if no token is send', (done) => {
    api.delete('/api/usuario/' + id)
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
  });
  
  it('Should delete the user with the given id', (done) => {
    api.delete('/api/usuario/' + id)
     .set('x-access-token',token)
      .expect(200)
      .end((err, res) => {
        res.body.success.should.be.true;
        done();
      });
  });

  it('Should fail if no user with the given id is found', (done) => {
    api.delete('/api/usuario/' + '183y2er79u24bfj') //Random id
     .set('x-access-token',token)
      .expect(400)
      .end((err, res) => {
        res.body.success.should.be.false;
        done();
      });
  }); 
});

