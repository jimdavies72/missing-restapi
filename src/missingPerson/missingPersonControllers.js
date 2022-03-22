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
      res.status(200).send({ msg: "Successfully updated user" });
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
      res.status(200).send({ msg: "Successfully updated user" });
    } else {
      throw new Error("Did not update");
    }

    // const updatedMP = await MP.updateOne(
    //   { _id: req.body._id },
    //   { data: req.body.data }
    // );
    // if (updatedMP.modifiedCount > 0) {
    //   res.status(200).send({ msg: "Successfully updated missing person" });
    // } else {
    //   throw new Error("Did not update");
    // }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
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
