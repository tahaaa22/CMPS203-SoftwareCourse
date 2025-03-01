const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const {id} = req.params;
  const index = employee.findIndex((e) => e.id === id);
  if (index === -1) {
      return res.status(404).json({ message: 'Employee not found' });
  }else{
      employee.splice(index, 1);
      return res.status(200).json({ message: 'Employee deleted' });
  }
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;
  employee.push({ id, name });
  return res.status(201).json({ message: 'Employee created' });
};
