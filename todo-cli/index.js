const { connect } = require("./connectDB.js");
const Todo = require("./todoModel.js");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.create({
      title: "First item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created todo with ID: ${todo.id}`);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await createTodo();
})();
