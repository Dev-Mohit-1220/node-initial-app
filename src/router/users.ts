import express from "express";
import { getAllUsers, deleteUser } from "../controllers/user"; // imported from the user controller

export default (router: express.Router) => {
  router.get("/users", getAllUsers);
  router.delete("/users/:id", deleteUser);
};
