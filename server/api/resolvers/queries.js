const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, { user }, info) {
    return user;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      console.log("here");
      console.log(pgResource);
      const user = await pgResource.getUserById(id);
      return user;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async items(parent, { filter }, { pgResource }, info) {
    try {
      console.log("here items");
      console.log(pgResource);
      const items = await pgResource.getItems(filter);
      return items;
    } catch (e) {
      throw new ApolloError(e);
    }
  },

  async tags(parent, args, { pgResource }, info) {
    try {
      console.log(pgResource);
      const tags = await pgResource.getTags();
      return tags;
    } catch (e) {
      throw newApollo(e);
    }
  }
});

module.exports = queryResolvers;
