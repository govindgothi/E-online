import { User } from "../models/users.model.js";
import { ApiError } from "../utils/Api_error.js";
import { ApiResponse } from "../utils/Api_response.js";

const generateAccessAndRefereshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

const registerUser = async (req, res) => {
  try {
    const detail= req.body
    //console.log(detail)
    const { fullName, email, username, password } = req.body;
    // if (
    //   [fullName, email, username, password].some(
    //     (field) => field?.trim() === ""
    //   )
    // ) {
    //   throw new ApiError(400, "All fields are required");
    // }

    const existedUser = await User.find({email});
    //console.log(existedUser)
    //console.log(detail)
    if (existedUser) {
      return res.json(existedUser)
     // throw new ApiError(400, "User with email or username already exists");
    }

    const user = await User.create({
      fullName,
      email,
      password,
      username: username.toLowerCase(),
    });
    //await console.log(user._id)
    const createdUser = await User.findById(user._id)
    console.log(createdUser)
    if (!createdUser) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }
    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered Successfully"));
  } catch {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    if (!(email && password)) {
      throw new ApiError(400, "username or email is required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(404, "User does not exist");
    }
    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials");
    }
    const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          "User logged In Successfully"
        )
      );
  } catch {
    throw new ApiError(401, "Invalid user credentials");
  }
};

export { registerUser, loginUser, };
