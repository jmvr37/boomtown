const { Pool } = require("pg");

module.exports = app => {
  // app.get("PG_HOST"),
  //   app.get("PG_USER"),
  //   app.get("PG_PASSWORD"),
  //   app.get("PG_DB");

  /**
   * @TODO: Configuration Variables
   *
   *  Retrieve the necessary information to connect to Postgres
   *  For example: app.get('PG_DB')
   */
  return new Pool({
    host: app.get("PG_HOST"),
    user: app.get("PG_USER"),
    password: app.get("PG_PASSWORD"),
    database: app.get("PG_DB")

    /**
     *  @TODO: Supply the correct configuration values to connect to postgres
     */
  });
};
