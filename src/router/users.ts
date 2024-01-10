import express from "express";
import { getAllUsers, deleteUser } from "../controllers/user"; // imported from the user controller
import { isAuthenticated, isOwner } from "middlewares";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
};
