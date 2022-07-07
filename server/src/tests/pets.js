process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

chai.use(chaiHttp);

describe('Pets', () => {
  it('should get list of pets', (done) => {
    chai.request(server).get('/api/pets')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(4);
          done();
        });
  });
  it('should get pet details', (done) => {
    chai.request(server).get('/api/pets/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.id.should.be.eq(1);
          res.body.should.be.a('object');
          done();
        });
  });
  it('should add pet', (done) => {
    const pet = {
      name: 'new pet',
      colour: 'new colour',
      age: 2,
      breed: 'new breed',
      owner: '2',
      type: 'dog',
    };
    chai.request(server).post('/api/pets')
        .send(pet).end((err, res) => {
          res.should.have.status(201);
          res.body.name.should.be.eq('new pet');
          res.body.should.be.a('object');
          done();
        });
  });
  it('should edit pet', (done) => {
    const pet = {
      name: 'updated pet',
      colour: 'updated colour',
      age: 1,
      breed: 'updated breed',
      owner: '2',
      type: 'dog',
    };
    chai.request(server).put('/api/pets/5')
        .send(pet).end((err, res) => {
          res.should.have.status(200);
          res.body.name.should.be.eq('updated pet');
          res.body.should.be.a('object');
          done();
        });
  });
});
