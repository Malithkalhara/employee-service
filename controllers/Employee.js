const EmployeeModel = require('../models/employee')

// Create and Save a new employee
exports.create = async (req, res) => {
  var empId;

  if (!req.body.firstName && !req.body.lastName) {
    res.status(400).send({ message: "Content cannot be empty!" });
  }

  try {
    empId = await EmployeeModel.countDocuments({});
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while generating employee id"
    });
  }

  const employee = new EmployeeModel({
    id: empId + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    phone: req.body.phone,
    photo: req.body.photo
  });

  await employee.save().then(data => {
    res.send({
      message: "Employee created successfully!!",
      employee: data
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating employee"
    });
  });
};

// Retrieve all users from the database.
exports.findAll = async (req, res) => {
  try {
    const employee = await EmployeeModel.find();
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
  await UserModel.findByIdAndRemove(req.params.id).then(data => {
    if (!data) {
      res.status(404).send({
        message: `User not found.`
      });
    } else {
      res.send({
        message: "User deleted successfully!"
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message
    });
  });
};
