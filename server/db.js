const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/acme_talent_agency_db');
const uuid = require('uuid');
const bcrypt = require('bcrypt');

const createTables = async()=> {
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
  };