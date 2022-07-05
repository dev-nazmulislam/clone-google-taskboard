import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { BiSortAZ } from "react-icons/bi";
import { AiOutlinePlus, AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import "./Components.css";

const MainBoard = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState(null);
  const [listText, setListText] = useState(null);
  const [tagle, setTagle] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((result) => setTodos(result));
  }, [todos]);

  // Add new List Item
  const listAdd = () => {
    const newData = {
      todoName: listText,
      addItem: false,
      todos: [],
    };
    listText
      ? fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newData),
        })
          .then((res) => res.json())
          .then((result) => {
            const allData = [...todos, newData];
            setTodos(allData);
          })
      : setTagle(!tagle);

    setListText(null);
  };
  // Delete list
  const delateList = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  // Task Update and add task
  const itemModify = (id) => {
    const newItem = todos.find((todo) => todo._id === id);
    newItem.addItem = !newItem.addItem;
    if (inputText) {
      newItem.todos = [
        ...newItem.todos,
        {
          userId: newItem.todos.length + 2,
          time: "10:12pm",
          task: inputText,
          completed: false,
        },
      ];
    }

    fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Task Added successfully!!!");
      });
    setInputText(null);
  };

  // Task Complate
  const itemComplate = (userId, taskId) => {
    const newTodo = todos.find((todo) => todo._id == userId);
    newTodo.todos.find((task) => task.userId == taskId).completed = true;

    fetch(`http://localhost:5000/todos/${userId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Task Added successfully!!!");
      });
  };
  // Delete Task
  const deleteTask = (userId, taskId) => {
    const newTodo = todos.find((todo) => todo._id == userId);
    const remaining = newTodo.todos.filter((task) => task.userId != taskId);
    newTodo.todos = remaining;

    fetch(`http://localhost:5000/todos/${userId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Task Added successfully!!!");
      });
  };
  const delateAllComplate = (userId) => {
    const newTodo = todos.find((todo) => todo._id == userId);
    const remaining = newTodo.todos.filter((task) => task.completed != true);
    newTodo.todos = remaining;

    fetch(`http://localhost:5000/todos/${userId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Task Added successfully!!!");
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-24 mx-3 md:mx-5 ">
      {todos?.map((todo) => (
        <div key={todo._id} className="bg-base-100 shadow-xl rounded">
          <div className="card-title flex justify-between items-center p-4 shadow">
            <h2>{todo?.todoName}</h2>
            <div class="dropdown dropdown-left">
              <label tabindex="3" class="cursor-pointer">
                <BsThreeDotsVertical />
              </label>
              <ul
                tabindex="3"
                class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72"
              >
                <li>
                  <a className="text-sm">
                    <GrEdit />
                    Rename list
                  </a>
                </li>
                <li>
                  <a className="text-sm">
                    <BiSortAZ />
                    Sort by date
                  </a>
                </li>
                <li onClick={() => delateList(todo._id)}>
                  <a className="text-sm">
                    <AiOutlineDelete />
                    Delete list
                  </a>
                </li>
                <li onClick={() => delateAllComplate(todo._id)}>
                  <a className="text-sm">
                    <AiOutlineDelete />
                    Delete all completed tasks
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Add Todo task */}
          {todo?.addItem ? (
            <div className="add-new-item">
              <input
                onBlur={() => itemModify(todo._id)}
                onChange={(e) => setInputText(e.target.value)}
                className="w-full"
                type="text"
                placeholder="New task"
              />
              <AiOutlinePlus
                onClick={() => itemModify(todo._id)}
                className="add-new-item-icon cursor-pointer"
              />
            </div>
          ) : (
            <div
              onClick={() => itemModify(todo._id)}
              className="add-item cursor-pointer"
            >
              <AiOutlinePlus className="add-item-icon" />
              <h1 className="add-item-task">Add a task</h1>
            </div>
          )}

          {/* Todo Incompleted Tasks */}
          {todo?.todos.map((item) =>
            item.completed ? (
              <></>
            ) : (
              <div key={item?.userId} className="task-items">
                <div
                  onClick={() => itemComplate(todo._id, item.userId)}
                  className="task-icons cursor-pointer"
                >
                  <FiCircle className="first" />
                  <FiCheckCircle className="socend" />
                </div>
                <h1>{item?.task}</h1>
                <AiFillEdit />
              </div>
            )
          )}

          {/* Todo Completed task */}
          {todo.todos.filter((item) => item.completed).length >= 1 ? (
            <div
              tabIndex="0"
              className="compalte-task collapse collapse-arrow "
            >
              <div className="collapse-title text-xl font-medium">
                Complate({todo.todos.filter((item) => item.completed).length})
              </div>
              <div className="collapse-content">
                {todo.todos
                  .filter((item) => item.completed)
                  .map((item) => (
                    <div key={item.userId} className="task-items">
                      <div className="flex justify-center items-center	">
                        <FiCheckCircle className="text-blue-400 text-xl" />
                        <h1 className="ml-2">
                          <del>{item.task}</del>
                        </h1>
                      </div>
                      <AiOutlineDelete
                        onClick={() => deleteTask(todo._id, item.userId)}
                        className="text-xl cursor-pointer"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
      {/* Add List */}
      <div className="bg-base-100">
        {tagle ? (
          <div className="add-item shadow-xl rounded">
            <input
              onBlur={listAdd}
              onChange={(e) => setListText(e.target.value)}
              className="w-full border-0 outline-0"
              type="text"
              placeholder="New list"
            />
            <AiOutlinePlus
              onClick={listAdd}
              className="cursor-pointer text-blue-400 text-xl"
            />
          </div>
        ) : (
          <div
            onClick={() => setTagle(!tagle)}
            className="add-item cursor-pointer shadow-xl rounded"
          >
            <AiOutlinePlus className="" />
            <h1 className="ml-2">Add new list</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBoard;
