const Mongoose = require("mongoose");

class BaseRepository {
  constructor(Model) {
    this.Model = Model;
  }

  validId(id) {
    return Mongoose.Types.ObjectId.isValid(id);
  }

  create(element) {
    const elementToStore = new this.Model(element);
    return elementToStore.save();
  }

  list(name, populateField = "") {
    return this.Model.find({ name: new RegExp(String(name), "i") }).populate(
      populateField
    );
  }

  getAll(params = {}, populateField = "") {
    return this.Model.find(params).populate(populateField);
  }

  getByField(field, populateField = "") {
    return this.Model.find(field).populate(populateField);
  }

  update(id, element) {
    return this.Model.findByIdAndUpdate(id, element, { new: true });
  }

  findById(id, populateField = "") {
    return this.Model.findById(id).populate(populateField);
  }

  findOne(element, populateField = "") {
    return this.Model.findOne(element).populate(populateField);
  }

  remove(id) {
    return this.Model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
