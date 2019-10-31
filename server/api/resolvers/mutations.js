const { ApolloError } = require("apollo-server-express");
const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function setCookie({ tokenName, token, res }) {
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 2 * 60 * 6000
  });
}

function generateToken(user, secret) {
  const { id, email, fullname, bio } = user; // Omit the password from the token
  return jwt.sign({ id, email, fullname, bio }, secret, { expiresIn: "2h" });
}

// @TODO: Uncomment these lines later when we add auth

// const authMutations = require("./auth");
// -------------------------------

const mutationResolvers = app => ({
  async signup(
    parent,
    {
      user: { fullname, email, password }
    },
    { pgResource, req }
  ) {
    try {
      const hashedPassword = await bcrypt.hash(args.user.password, 10);
      const user = await context.pgResource.createUser({
        fullname: args.user.fullname,
        email: args.user.email,
        password: hashedPassword
      });

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  async login(
    parent,
    {
      user: { email, password }
    },
    { pgResource, req }
  ) {
    try {
      const user = await context.pgResource.getUserAndPasswordForVerification(
        args.user.email
      );
      if (!user) throw "User was not found.";

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) throw "Invalid Password";

      const token = generateToken(user, app.get("JWT_SECRET"));

      setCookie({
        tokenName: app.get("JWT_COOKIE_NAME"),
        token,
        res: req.res
      });

      return {
        token,
        user
      };
    } catch (e) {
      throw new AuthenticationError(e);
    }
  },

  logout(parent, args, context) {
    context.req.res.clearCookie(app.get("JWT_COOKIE_NAME"));
    return true;
  },
  async addItem(parent, args, context, info) {
    /**
     *  @TODO: Destructuring
     *
     *  The 'args' and 'context' parameters of this resolver can be destructured
     *  to make things more readable and avoid duplication.
     *
     *  When you're finished with this resolver, destructure all necessary
     *  parameters in all of your resolver functions.
     *
     *  Again, you may look at the user resolver for an example of what
     *  destructuring should look like.
     */
    const user = await jwt.decode(context.token, app.get("JWT_SECRET"));
    const newItem = await context.pgResource.saveNewItem({
      item: args.item,
      user
    });
    return newItem;
  }
});
