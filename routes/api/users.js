const express = require("express");
const routes = express.Router();
const users = require("../../users");
const uuid = require("uuid");

//get
routes.get("/", (req, res) => res.json(users));

//post
routes.post("/", (req, res) => {
  const newUser = {
    id: "6",
    name: req.body.name,
    email: req.body.email,
  };
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: "please include a name and email" });
  }
  users.push(newUser);
  res.json(users);
});

//put
// routes.put("/:id", (req, res) => {
//   let found = users.some((user) => user.id === parseInt(req.params.id));
//   if (found) {
//     const updUser = req.body;
//     users.forEach((user) => {
//       if (user.id === parseInt(req.params.id)) {
//         user.name = updUser.name ? updUser.name : user.name;
//         user.email = updUser.email ? updUser.email : user.email;
//         res.json({ msg: "User updated", user });
//       }
//     });
//   } else {
//     res.status(400).json({ msg: `No user with the if of ${req.params.id}` });
//   }
// });

//delete
routes.delete("/:id", (req, res) => {
  let found = users.some((user) => user.id == req.body.id);
  if (found) 
  {
    users.forEach((user) => 
    {
      if (user.id == req.body.id) 
      {
        users.shift(user);
        res.json({ msg: "User delete ", user });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the if of ${req.body.id}` });
  }
});

module.exports = routes;
