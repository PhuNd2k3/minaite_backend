const { showUserById } = require("../CRUD/user");
const jwt = require("jsonwebtoken");

async function getUserById(request, response) {
  try {
    // const decode = jwt.verify(request.body.token, process.env.JWT_SECRET_KEY);
    const token = request.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    //Bearer {token}
    const profile = await showUserById(decode.id);
    return response.status(200).json({
      message: "Success get profile",
      profile: profile,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Something went wrong!",
      error: error,
    });
  }
}

// async function getProfileByToken()

module.exports = {
  getUserById: getUserById,
};
