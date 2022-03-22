const { Router } = require("express");
const {
  addMissingPerson,
  listMissingPersons,
  updateVisibility,
  searchMPByName,
  listMyMissingPersons,
  updateMissingPerson,
} = require("./missingPersonControllers");
const mpRouter = Router();

mpRouter.post("/missing", addMissingPerson);
mpRouter.get("/missing/list", listMissingPersons);
mpRouter.patch("/missing", updateVisibility);
mpRouter.post("/missing/search", searchMPByName);
mpRouter.post("/mymissing", listMyMissingPersons);
mpRouter.put("/missing", updateMissingPerson);

module.exports = mpRouter;
