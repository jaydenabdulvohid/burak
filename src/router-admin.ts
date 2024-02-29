import express from "express";
const routerAdmin = express.Router();
import restaurantmemberController from "./controllers/restaurant.controller";

/* Restaurant */
routerAdmin.get("/", restaurantmemberController.goHome);
routerAdmin
  .get("/login", restaurantmemberController.getLogin)
  .post("/login", restaurantmemberController.processLogin);
routerAdmin
  .get("/signup", restaurantmemberController.getSignup)
  .post("/signup", restaurantmemberController.processSignup);

/** Product */
/** User */

export default routerAdmin;
