require('dotenv').config();

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'unbroken2650',
  host: 'localhost',
  database: 'ssuexchange',
  password: process.env.postgresPW,
  port: 5432,
});

const getUniversities = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query("SELECT * FROM universities", (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

module.exports = {
  getUniversities
};