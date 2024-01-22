import Auth from "../models/auth.model";

const getAllUsers = async () => {
  try {
    const users = await Auth.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const deleteAllUsers = async () => {
  try {
    await Auth.deleteMany();
  } catch (error) {
    throw error;
  }
};

export const authActions = {
  getAllUsers,
  deleteAllUsers,
};
