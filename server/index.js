const {
    client,
    createTables,
    createCustomer,
    createRestaurant,
    fetchCustomer,
    fetchRestaurant,
    fetchReservation,
    createReservation,
    destroyReservation
  } = require('./db');
  const express = require('express');
const app = express();

app.get('/api/customers', async(req, res, next)=> {
    try {
      res.send(await fetchCustomer());
    }
    catch(ex){
      next(ex);
    }
  });

app.get('/api/restaurant', async(req, res, next)=> {
    try {
      res.send(await fetchRestaurant());
    }
    catch(ex){
      next(ex);
    }
  });

 app.get('/api/customer/:id/reservation', async(req, res, next)=> {
    try {
      res.send(await fetchReservation(req.params.id));
    }
    catch(ex){
      next(ex);
    }
  });

app.post('/api/customer/:id/reservation', async(req, res, next)=> {
    try {
      res.status(201).send(await createReservation({ restaurant_id: req.params.id, date, party_count}));
    }
    catch(ex){
      next(ex);
    }
  });

app.delete('/api/cutomer/:customerId/reservation/:id', async(req, res, next)=> {
    try {
      await deleteUserSkill({ id: req.params.id, customer_id: req.params.customerId });
      res.sendStatus(204);
    }
    catch(ex){
      next(ex);
    }
  });