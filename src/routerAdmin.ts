import express from "express";
const routerAdmin = express.Router();
import restaurantmemberController from "./controllers/restaurant.controller";

routerAdmin.get("/", restaurantmemberController.goHome);

routerAdmin.get("/login", restaurantmemberController.getLogin);

routerAdmin.get("/signup", restaurantmemberController.getSignup);

export default routerAdmin;
