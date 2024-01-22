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

export const authActions = {
  registerUser,
};
