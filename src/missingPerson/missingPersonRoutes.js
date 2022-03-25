const { Router } = require("express");
const {
  addMissingPerson,
  listAllMissingPersons,
  updateVisibility,
  searchMPByName,
  listFilteredMissingPersons,
  updateMissingPerson,
  deleteMissingPersons,
  updateMessages,
} = require("./missingPersonControllers");
const mpRouter = Router();

mpRouter.post("/missing", addMissingPerson);
mpRouter.get("/missing/list", listAllMissingPersons);
mpRouter.patch("/missing", updateVisibility);
mpRouter.patch("/missing/messages", updateMessages);
mpRouter.post("/missing/search", searchMPByName);
mpRouter.post("/missing/filtered", listFilteredMissingPersons);
mpRouter.put("/missing", updateMissingPerson);
mpRouter.delete("/missing/:userid", deleteMissingPersons);

module.exports = mpRouter;
