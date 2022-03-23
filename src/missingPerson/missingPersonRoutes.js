const { Router } = require("express");
const {
  addMissingPerson,
  listMissingPersons,
  updateVisibility,
  searchMPByName,
  listMyMissingPersons,
  updateMissingPerson,
  deleteMissingPersons,
  updateMessages,
} = require("./missingPersonControllers");
const mpRouter = Router();

mpRouter.post("/missing", addMissingPerson);
mpRouter.get("/missing/list", listMissingPersons);
mpRouter.patch("/missing", updateVisibility);
mpRouter.patch("/missing/messages", updateMessages);
mpRouter.post("/missing/search", searchMPByName);
mpRouter.post("/mymissing", listMyMissingPersons);
mpRouter.put("/missing", updateMissingPerson);
mpRouter.delete("/missing/:userid", deleteMissingPersons);

module.exports = mpRouter;
