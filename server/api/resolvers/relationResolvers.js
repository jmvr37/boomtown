const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {
    async items(parent, args, { pgResource }, info) {
      try {
        const userItems = await pgResource.getItemsForUser(parent.id);
        console.log("user items relation resolver");

        let newUserItems = userItems.map(item => {
          item.imageurl = item.imageUrl;
          return item;
        });
        console.log(newUserItems);
        return newUserItems;
      } catch (e) {
        throw new ApolloError(e);
      }
    },
    async borrowed(parent, args, { pgResource }, info) {
      try {
        const borrowed = await pgResource.getBorrowedItemsForUser(parent.id);
        return borrowed;
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  },

  Item: {
    async itemowner(parent, args, { pgResource }, info) {
      try {
        const itemOwner = await pgResource.getUserById(parent.ownerId);

        return itemOwner;
      } catch (e) {
        throw new ApolloError(e);
      }
    },

    async tags(parent, args, { pgResource }, info) {
      try {
        const itemTag = await pgResource.getTagsForItem(parent.id);
        return itemTag;
      } catch (e) {
        throw new ApolloError(e);
      }
    },

    async borrower(parent, args, { pgResource }, info) {
      try {
        const itemBorrowed = await pgResource.getUserById(parent.id);
        return itemBorrowed;
      } catch (e) {
        throw new ApolloError(e);
      }
    }
  }
};

module.exports = relationResolvers;
