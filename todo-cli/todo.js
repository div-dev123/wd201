/* eslint-disable no-undef */
const todoList = () => {
  let all = [];

  // Helper function to get today's date in 'YYYY-MM-DD' format
  const formatDate = (d) => d.toISOString().split("T")[0];
  const today = formatDate(new Date());

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Return todos where the due date is earlier than today
    return all.filter((todo) => new Date(todo.dueDate) < new Date(today));
  };

  const dueToday = () => {
    // Return todos where the due date is today
    return all.filter((todo) => todo.dueDate === today);
  };

  const dueLater = () => {
    // Return todos where the due date is later than today
    return all.filter((todo) => new Date(todo.dueDate) > new Date(today));
  };

  const toDisplayableList = (list) => {
    // Format the output string based on todo items
    return list
      .map((todo) => {
        const checkbox = todo.completed ? "[x]" : "[ ]";
        const displayDate = todo.dueDate === today ? "" : todo.dueDate;
        return `${checkbox} ${todo.title} ${displayDate}`.trim();
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
