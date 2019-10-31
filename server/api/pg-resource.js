function tagsQueryString(tags, itemid, result) {
  for (i = tags.length; i > 0; i--) {
    result += `($${i}, ${itemid}),`;
  }
  return result.slice(0, -1) + ";";
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: `INSERT INTO users (fullname, email, password) VALUES 
        ($1, $2, $3) RETURN *, values: [fullname, email, password]
        values: [fullname, email, password]`
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE email = $1", // @TODO: Authentication - Server
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },

    async getUserById(id) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE id = $1", // @TODO: Basic queries
        values: id ? [id] : []
      };
      console.log("here2");
      const user = await postgres.query(findUserQuery);
      console.log("here3");
      console.log(user);
      return user.rows[0];
      // -------------------------------
    },
    async getItems(idToOmit) {
      const items = await postgres.query({
        text: `SELECT * FROM items ${idToOmit ? `WHERE "ownerId" != $1` : ``}`,
        values: idToOmit ? [idToOmit] : []
      });
      return items.rows;
    },

    async getItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * FROM items WHERE "ownerId" = $1`,
        values: [id]
      });
      return items.rows;
    },
    async getBorrowedItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * FROM items WHERE "borrower" = $1`,
        values: [id]
      });
      return items.rows;
    },
    async getTags() {
      const tags = await postgres.query("SELECT * FROM tags");
      return tags.rows;
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT * FROM tags INNER JOIN itemstag ON itemtags.tagId = tags.id WHERE itemstags.itemId = $1`,
        values: [id]
      };

      const tags = await postgres.query(tagsQuery);
      return tags.rows;
    },
    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        /**
         * Begin transaction by opening a long-lived connection
         * to a client from the client pool.
         * - Read about transactions here: https://node-postgres.com/features/transactions
         */
        postgres.connect((err, client, done) => {
          try {
            // Begin postgres transaction
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;
              const itemQuery = {
                text: `INSERT INTO items (title, description, ownerId) VALUES ($1, $2, $3) RETURNING *`,
                values: [title, description, user]
              };
              // Generate new Item query
              // @TODO
              // -------------------------------
              const newItem = await postgres.query(itemQuery);

              // Insert new Item
              // @TODO
              // -------------------------------

              // Generate tag relationships query (use the'tagsQueryString' helper function provided)
              // @TODO
              // -------------------------------
              const tagsQuery = {
                text: `INSERT INTO items (title, description,imageUrl,ownerId,borrowedId) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
                values: [
                  item.title,
                  item.image,
                  item.description,
                  item.owner[0].id,
                  borrowed
                ]
              };
              // Insert tags
              // @TODO
              // -------------------------------
              const insertTags = {};
              // Commit the entire transaction!
              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                // release the client back to the pool
                done();
                // Uncomment this resolve statement when you're ready!
                resolve(newItem.rows[0]);
                // -------------------------------
              });
            });
          } catch (e) {
            // Something went wrong
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              // release the client back to the pool
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
