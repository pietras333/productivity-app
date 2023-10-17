import List from "../components/List";

const Board = () => {
  const sendRequest = async () => {
    const jwt = window.localStorage.getItem("authorizationToken");
    const list = "Piniata";
    const response = await fetch("../api/tasks/subtasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
        Action: "Deletion",
      },
      body: JSON.stringify({
        list: list,
        category: "Skincare",
        subtasks: {
          name: "Test",
          new: { name: "Test", date: "New Date", completed: false },
        },
      }),
    });
  };

  return <List />;
};

export default Board;
