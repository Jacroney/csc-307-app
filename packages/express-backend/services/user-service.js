import User from "../models/user.js";

function getUsers(name, job) {
  let promise;
  if (name && job) {
    promise = User.find({ name: name, job: job });
  } else if (name) {
    promise = User.find({ name: name });
  } else if (job) {
    promise = User.find({ job: job });
  } else {
    promise = User.find();
  }
  return promise;
}

function findUserById(id) {
  return User.findById(id);
}

function addUser(user) {
  const userToAdd = new User(user);
  return userToAdd.save();
}

function deleteUserById(id) {
  return User.findByIdAndDelete(id);
}

export default {
  getUsers,
  findUserById,
  addUser,
  deleteUserById
};
