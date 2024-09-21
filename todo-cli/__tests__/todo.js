/* eslint-disable no-undef */
const todoList = require("../todo");

describe("Todolist test suite", () => {
  let todolistInstance;

  // Set up the todolist instance and today's date
  beforeEach(() => {
    todolistInstance = todoList();
  });

  test("Should add new todo", () => {
    const initialTodoCount = todolistInstance.all.length;

    todolistInstance.add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0], // Use today’s date
    });

    expect(todolistInstance.all.length).toBe(initialTodoCount + 1);
  });

  test("Should mark todo as complete", () => {
    todolistInstance.add({
      title: "Incomplete todo",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
    });

    expect(todolistInstance.all[0].completed).toBe(false);

    todolistInstance.markAsComplete(0);
    expect(todolistInstance.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    // Add a todo that is overdue (1 day in the past)
    todolistInstance.add({
      title: "Overdue todo",
      completed: false,
      dueDate: new Date(Date.now() - 86400000).toISOString().split("T")[0], // 1 day ago
    });

    const overdueItems = todolistInstance.overdue();
    expect(overdueItems.length).toBe(1); // Expect 1 overdue item
  });

  test("Should retrieve due today items", () => {
    todolistInstance.add({
      title: "Due today todo",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0], // Today’s date
    });

    const dueTodayItems = todolistInstance.dueToday();
    expect(dueTodayItems.length).toBe(1); // Expect 1 due today item
  });

  test("Should retrieve due later items", () => {
    // Add a todo that is due later (1 day in the future)
    todolistInstance.add({
      title: "Due later todo",
      completed: false,
      dueDate: new Date(Date.now() + 86400000).toISOString().split("T")[0], // 1 day later
    });

    const dueLaterItems = todolistInstance.dueLater();
    expect(dueLaterItems.length).toBe(1); // Expect 1 due later item
  });
});
