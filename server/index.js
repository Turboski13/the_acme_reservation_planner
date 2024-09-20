/* const {
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
const app = express(); */

/* app.get('/api/customers', async(req, res, next)=> {
    try {
      res.send(await fetchCustomer());
    }
    catch(ex){
      next(ex);
    }
  }); */

/* app.get('/api/restaurant', async(req, res, next)=> {
    try {
      res.send(await fetchRestaurant());
    }
    catch(ex){
      next(ex);
    }
  }); */

 /* app.get('/api/customer/:id/reservation', async(req, res, next)=> {
    try {
      res.send(await fetchReservation(req.params.id));
    }
    catch(ex){
      next(ex);
    }
  }); */

/* app.post('/api/customer/:id/reservation', async(req, res, next)=> {
    try {
      res.status(201).send(await createReservation({ restaurant_id: req.params.id, date, party_count}));
    }
    catch(ex){
      next(ex);
    }
  }); */

/* app.delete('/api/cutomer/:customerId/reservation/:id', async(req, res, next)=> {
    try {
      await deleteUserSkill({ id: req.params.id, customer_id: req.params.customerId });
      res.sendStatus(204);
    }
    catch(ex){
      next(ex);
    }
  }); */


/*   const init = async()=> {
    await client.connect();
    console.log('connected to database');
    await createTables();
    console.log('tables created');
    const [julia, ellen, brianne, bob, newWave, coldSprings, cumin, knights ] = await Promise.all([
        createCustomer({ name: 'Julia' }),
        createCustomer({ name: 'Ellen' }),
        createCustomer({ name: 'Brianne' }),
        createCustomer({ name: 'Bob' }),
        createRestaurant({ name: 'New Wave Burrito'}),
        createRestaurant({ name: 'Cold Springs Oyster Bar'}),
        createRestaurant({ name: 'Cumin Indian Restaurant'}),
        createRestaurant({ name: 'Knights Steakhouse'})
    ]);
    const users = await fetchCustomer();
    console.log(users);
  
    const skills = await fetchRestaurant();
    console.log(skills);

    const userSkills = await Promise.all([
        createUserSkill({ user_id: julia.id, restaurant_id: newWave.id}),
        createUserSkill({ user_id: ellen.id, restaurant_id: coldSprings.id}),
        createUserSkill({ user_id: brianne.id, restaurant_id: cumin.id}),
        createUserSkill({ user_id: bob.id, restaurant_id: knights.id}),
      ]);

      console.log(await fetchreservation(julia.id));
      await deleteUserSkill({ user_id: julia.id, id: reservation[0].id});
      console.log(await fetchUserSkills(julia.id));
    
      console.log(`curl localhost:3000/api/customer/${bob.id}/reservation`);
    
      console.log(`curl -X POST localhost:3000/api/customer/${bob.id}/reservation -d '{"restaurant_id": "${coldSprings.id}"}' -H 'Content-Type:application/json'`);
      console.log(`curl -X DELETE localhost:3000/api/customer/${bob.id}/reservation/${reservation[3].id}`);
      
      console.log('data seeded');
    
      const port = process.env.PORT || 3000;
      app.listen(port, ()=> console.log(`listening on port ${port}`));
    };
    
    init(); */