import Auth from "../models/auth.model";

const registerUser = async (name: string, email: string, password: string) => {
  try {
    const newUser = new Auth({
      name,
      email,
      password,
    });

    newUser.password = await Auth.encryptPassword(password);

    await newUser.save();

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    const user = await Auth.findOne({ email });

    if (!user) return null;

    const isPasswordMatch = await Auth.comparePassword(password, user.password);

    if (!isPasswordMatch) return null;

    return user;
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email: string) => {
  try {
    const existingEmail = await Auth.findOne({ email });
    if (existingEmail) return existingEmail;
    else return null;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id: string) => {
  try {
    const user = await Auth.findById(id);
    if (user) return user;
    else return null;
  } catch (error) {
    throw error;
  }
};

export const authActions = {
  registerUser,
  loginUser,
  getUserByEmail,
  getUserById,
};
