import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { mockMenu, mockMeals, mockOrders } from './mockResult';

chai.use(chaiHttp);
const { expect } = chai;

const { validMeal } = mockMeals;
const { validOrder } = mockOrders;


describe('Application tests', () => {
  describe('MENU', () => {
    it('It should retrieve the menu for the day', (done) => {
      chai.request(app)
        .get('/api/v1/menu')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
    it('It should create the menu for the day', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .set('Accept', 'application/json')
        .send(mockMenu)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.name).to.equal('Today Menu');
          done();
        });
    });
  });

  describe('MEALS', () => {
    it('It should get all meals', (done) => {
      chai.request(app)
        .get('/api/v1/meals')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('It should add a meal', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
        .set('Accept', 'application/json')
        .send(validMeal)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('It should update a meal', (done) => {
      chai.request(app)
        .patch('/api/v1/meals/1')
        .set('Accept', 'application/json')
        .send(validMeal)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('It should delete a meal', (done) => {
      chai.request(app)
        .delete('/api/v1/meals/1')
        .set('Accept', 'application/json')
        .send(validMeal)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
  describe('ORDERS', () => {
    it('It should select an order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .set('Accept', 'application/json')
        .send(validOrder)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('It should update an order', (done) => {
      chai.request(app)
        .patch('/api/v1/orders/1')
        .set('Accept', 'application/json')
        .send(validOrder)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('It should retrieve all orders', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
  });
});
