const MP = require("./missingPersonModel");

exports.addMissingPerson = async (req, res) => {
  try {
    const newMP = await MP.create(req.body);
    res.status(200).send({ missingPerson: newMP });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.listMissingPersons = async (req, res) => {
  try {
    const mps = await MP.find({});
    res.status(200).send({ mps });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.listMyMissingPersons = async (req, res) => {
  try {
    const mps = await MP.find({
      [req.body.filterKey]: req.body.filterVal,
    });
    res.status(200).send({ mymps: mps });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateVisibility = async (req, res) => {
  try {
    const updatedVisibity = await MP.updateOne(
      { [req.body.filterKey]: req.body.filterVal },
      { [req.body.updateKey]: req.body.updateVal }
    );

    if (updatedVisibity.modifiedCount > 0) {
      res.status(200).send({ msg: "Successfully updated missing person" });
    } else {
      throw new Error("Did not update");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.updateMissingPerson = async (req, res) => {
  try {
    const filter = { _id: req.body.id };
    const update = req.body.data;
    const options = { new: true };

    const updatedMP = await MP.findOneAndUpdate(filter, update, options);

    if (updatedMP) {
      res.status(200).send({ msg: "Successfully updated missing person" });
    } else {
      throw new Error("Did not update");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateMessages = async (req, res) => {
  try {
    const updatedVisibity = await MP.updateOne(
      { [req.body.filterKey]: req.body.filterVal },
      { [req.body.updateKey]: req.body.updateVal }
    );

    if (updatedVisibity.modifiedCount > 0) {
      res.status(200).send({ msg: "Successfully updated messages" });
    } else {
      throw new Error("Did not update");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.searchMPByName = async (req, res) => {
  try {
    const mps = await MP.find({
      [req.body.filterKey]: { $regex: req.body.filterVal },
    });
    res.status(200).send({ missingPersons: mps });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

// deleteMissingPersons is a deleteMany() that is used to clean up if a user decides to delete their account. this controller shouldnt really be used for any other purpose given how destructive it is!!
exports.deleteMissingPersons = async (req, res) => {
  try {
    const result = await MP.deleteMany({ userId: req.params.userid });

    if (result && result.deletedCount > 0) {
      res.status(200).send({ msg: `missing persons have been deleted` });
    } else {
      throw new Error("missing persons were not deleted");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
