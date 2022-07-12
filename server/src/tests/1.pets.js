process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

import * as fs from 'fs';
chai.use(chaiHttp);

chai.should();


fs.writeFileSync('./data/pets.json', JSON.stringify([]), 'utf-8');

describe('Pets', () => {
  it('should add pet', (done) => {
    let counter = 0;
    for (let i = 1; i <= 4; i++) {
      setTimeout(function() {
        const pet = {
          id: i,
          name: 'Pet ' + i,
          colour: 'Color ' + i,
          age: i,
          breed: 'Breed ' + i,
          owner: `${i}`,
          type: i % 2 === 0 ? 'dog' : 'cat',
        };

        chai.request(server).post('/api/pets')
            .send(pet).end((err, res) => {
              res.should.have.status(201);
              res.body.name.should.be.eq('Pet ' + i);
              res.body.should.be.a('object');
              counter++;
              if (counter === 4) done();
            });
      }, i * 500);
    }
  });
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
          res.body.name.should.be.eq('Pet 1');
          res.body.should.be.a('object');
          done();
        });
  });

  it('should edit pet', (done) => {
    const pet = {
      name: 'Updated Pet 4',
      colour: 'Updated Color 4',
      age: 4,
      breed: 'Updated Breed 4',
      owner: '4',
      type: 'dog',
    };
    chai.request(server).put('/api/pets/4')
        .send(pet).end((err, res) => {
          res.should.have.status(200);
          res.body.name.should.be.eq('Updated Pet 4');
          res.body.should.be.a('object');
          done();
        });
  });
});
