const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/reservation"
);
client.connect();
console.log('Connected');

const uuid = require("uuid");
const bcrypt = require("bcrypt");

const createTables = async () => {
  const SQL = `
      DROP TABLE IF EXISTS customer;
      DROP TABLE IF EXISTS restaurant;
      DROP TABLE IF EXISTS reservation;
      CREATE TABLE customer(
        id UUID PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
         );
      CREATE TABLE restaurant(
        id UUID PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL
      );
      CREATE TABLE reservation(
        id UUID PRIMARY KEY,
        date DATE NOT NULL 
        party_count INTERGER NOT NULL,
        restaurant_id UUID REFERENCES restaurant(id) NOT NULL,
        customer_id UUID REFERENCES customer(id) NOT NULL
      );
    `;
  await client.query(SQL);
  console.log('Tables Created');
};

const createCustomer = async ({ name }) => {
  const SQL = `
      INSERT INTO users(id, name) VALUES($1, $2) RETURNING *
    `;
  const response = await client.query(SQL, [uuid.v4(), name]);
  return response.rows[0];
};

const createRestaurant = async ({ name }) => {
  const SQL = `
          INSERT INTO restautant(id, name) VALUES($1, $2) RETURNING *
        `;
  const response = await client.query(SQL, [uuid.v4(), name]);
  return response.rows[0];
};

const fetchCustomer = async () => {
  const SQL = `
          SELECT * FROM customer;
        `;
  const response = await client.query(SQL);
  return response.rows;
};

const fetchRestaurant = async () => {
  const SQL = `
          SELECT * FROM restaurant;
        `;
  const response = await client.query(SQL);
  return response.rows;
};

const fetchReservation = async(id)=> {
    const SQL = `
      SELECT * FROM reservation
      WHERE customer_id = $1
    `;
    const response = await client.query(SQL, [ id ]);
    return response.rows;
  }



const createReservation = async ({
  customer_id,
  restaurant_id,
  date,
  party_count,
}) => {
  const SQL = `
          INSERT INTO user_skills(id, customer_id, restaurant_id, date, party_count) VALUES($1, $2, $3, $4, $5) RETURNING *
        `;
  const response = await client.query(SQL, [
    uuid.v4(),
    user_id,
    skill_id,
    date,
    party_count,
  ]);
  return response.rows[0];
};

const destroyReservation = async ({ id, customer_id }) => {
  const SQL = `
          DELETE FROM reservation
          WHERE id = $1 AND customer_id = $2
        `;
  await client.query(SQL, [id, customer_id]);
};

module.exports = {
  client,
  createTables,
  createCustomer,
  createRestaurant,
  fetchCustomer,
  fetchRestaurant,
  fetchReservation,
  createReservation,
  destroyReservation,
};
 