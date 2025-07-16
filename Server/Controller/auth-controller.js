// register page login
const register = async (req, res) => {
  try {
    res.send("welcome to home page with controller ");
  } catch (e) {
    console.log(e);
  }
};

module.exports = { register };

// const home = async (req, res) => {
//   try {
//     res.send("Welcome to routes worlds with controlle ");
//   } catch (error) {
//     console.log(error);
//   }
// };
