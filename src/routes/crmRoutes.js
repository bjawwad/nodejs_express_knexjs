import urlLog from "../middlewares/urlLog";
import { addNewContact, getAllContacts } from "../controllers/crmController";

const routes = app => {
  app
    .route("/contact")
    .get(urlLog, getAllContacts)
    .post(urlLog, addNewContact);

  app
    .route("/contact/:contactID")
    .put(urlLog, (req, res) => {
      res.send("PUT Successfull Request");
    })
    .delete(urlLog, (req, res) => {
      res.send("DELETE Successfull Request");
    });
};

export default routes;
