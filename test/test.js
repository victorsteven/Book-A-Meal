import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/index';
import { mockMenu, mockMeals, mockOrders } from './mockResult';

chai.use(chaiHttp);
const { expect } = chai;
const should = chai.should();
const { menu } = mockMenu;
const { validMeal } = mockMeals;
const { validOrder } = mockOrders;


describe('Application tests', () => {
  describe('MENU', () => {
    it('It should retrieve the menu for the day', (done) => {
      chai.request(app)
        .get('/api/v1/menu')
        .set('Accept', 'application/json')
        .end((err, res) => {
          console.log(res.body.data);
          expect(res.status).to.equal(200);
          // expect(res.body.data).deep.equal('object');
          done();
        });
    });
    it('It should create the menu for the day', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .set('Accept', 'application/json')
        .send(menu)
        .end((err, res) => {
          expect(res.status).to.equal(201);
          res.body.should.have.property('id');
          res.body.should.have.property('name');
          done();
        });
    });
  });

  describe('MEALS', () => {
    // it('It should get all meals', (done) => {
    //   chai.request(app)
    //     .get('/api/v1/meals')
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //       expect(res.status).to.equal(200);
    //       res.body.data[0].should.have.property('id');
    //       res.body.data[0].should.have.property('name');
    //       res.body.data[0].should.have.property('size');
    //       res.body.data[0].should.have.property('price');
    //       res.body.data[0].should.have.property('menuId');
    //       done();
    //     });
    // });

    // it('It should add a meal', (done) => {
    //   chai.request(app)
    //     .post('/api/v1/meals')
    //     .set('Accept', 'application/json')
    //     .send(validMeal)
    //     .end((err, res) => {
    //       expect(res.status).to.equal(200);
    //       expect(res.body.data).to.have.property('name');
    //       done();
    //     });
    // });

    // it('It should update a meal', (done) => {
    //   const id = validMeal.id;
    //   const name = validMeal.name;
    //   chai.request(app)
    //     .patch(`/api/v1/meals/${id}`)
    //     .set('Accept', 'application/json')
    //     .send(validMeal)
    //     .end((err, res) => {
    //       expect(res.status).to.equal(200);
    //       expect(res.body.data.name).equal(name);
    //       expect(res.body.data.menuId).equal(1);
    //       done();
    //     });
    // });

    // it('It should delete a meal', (done) => {
    //   const id = validMeal.id;
    //   chai.request(app)
    //     .delete(`/api/v1/meals/${id}`)
    //     .set('Accept', 'application/json')
    //     .send(validMeal)
    //     .end((err, res) => {
    //       expect(res.status).to.equal(200);
    //       expect(res.body.data).to.include({});
    //       done();
    //     });
    // });
  });

  // describe('ORDERS', () => {
  //   it('It should select an order', (done) => {
  //     chai.request(app)
  //       .post('/api/v1/orders')
  //       .set('Accept', 'application/json')
  //       .send(validOrder)
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200);
  //         expect(res.body.data).to.include({
  //           id: 5,
  //           name: 'Order1',
  //           mealId: 3,
  //           menuId: 1,
  //         });
  //         done();
  //       });
  //   });

  //   it('It should update an order', (done) => {
  //     chai.request(app)
  //       .patch('/api/v1/orders/1')
  //       .set('Accept', 'application/json')
  //       .send(validOrder)
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200);
  //         expect(res.body.data).to.have.property('name');
  //         done();
  //       });
  //   });

  //   it('It should retrieve all orders', (done) => {
  //     chai.request(app)
  //       .get('/api/v1/orders')
  //       .set('Accept', 'application/json')
  //       .end((err, res) => {
  //         expect(res.status).to.equal(200);
  //         res.body.data[0].should.have.property('id');
  //         res.body.data[0].should.have.property('name');
  //         res.body.data[0].should.have.property('mealId');
  //         res.body.data[0].should.have.property('menuId');
  //         done();
  //       });
  //   });
  // });
});
