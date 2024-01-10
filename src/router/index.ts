import express from "express";

//routes
import authentication from "./authentication";
import users from "./users";

const router = express.Router();

export default (): express.Router => {
  authentication(router); // authentication route
  users(router); // user route

  return router;
};
