const Expense = require("../models/expense");

const addExpense = async (req, res, enxt) => {
  try {
    const amount = req.body.money;
    const descripition = req.body.description;
    const category = req.body.category;

    const uId = await Expense.create({
      amount: amount,
      descripiton: descripition,
      category: category,
    });
    res.status(201).json({ newExpense: uId });
  } catch (err) {
    res.status(200).json({
      error: err,
    });
  }
};

const getExpense = async (req, res, next) => {
  try {
    const data = await Expense.findAll();
    res.status(200).json({ allExpense: data });
  } catch (error) {
    console.log("Get user is falling", JSON.stringify(error));
    res.status(500).json({ error: error });
  }
};

const deleteExpense = async (req, res, next) => {
  try {
    const uId = req.params.id;
    await Expense.destroy({ where: { id: uId } });
    res.sendStatus(200).json;
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  addExpense,
  getExpense,
  deleteExpense,
};
