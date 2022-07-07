process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
chai.use(chaiHttp);

chai.should();

/**
 * Gets owners from pets.json file.
 * @return {array} The list of owners.
 */
describe('Owners', () => {
  it('should get list of owners', (done) => {
    chai.request(server).get('/api/owners').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('array');
      res.body.length.should.be.eql(4);
      done();
    });
  });
  it('should get owner and his pets', (done) => {
    chai.request(server).get('/api/owners/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.id.should.be.eq(1);
          res.body.pets.should.be.a('array');
          res.body.pets.length.should.be.eql(2);
          done();
        });
  });
});
