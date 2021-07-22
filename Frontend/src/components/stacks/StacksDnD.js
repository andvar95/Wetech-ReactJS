import { result } from "lodash";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import Task from "./DrawTask";
import { useState } from "react";
import { end } from "worker-farm";

const initialState = [
  {
    _id: "1",
    name: "all",
    tasks: [
      { _id: "1", name: "T1", description: "Description 1", status: "all" },
      { _id: "2", name: "T2", description: "Description 2", status: "all" },
      { _id: "3", name: "T3", description: "Description 3", status: "all" },
      { _id: "4", name: "T4", description: "Description 4", status: "all" },
    ],
  },
  {
    _id: "2",
    name: "todo",
    tasks: [
      { _id: "5", name: "T5", description: "Description 5", status: "todo" },
      { _id: "6", name: "T6", description: "Description 6", status: "todo" },
      { _id: "7", name: "T7", description: "Description 7", status: "todo" },
      { _id: "8", name: "T8", description: "Description 8", status: "todo" },
    ],
  },
  {
    _id: "3",
    name: "in-progress",
    tasks: [
      {
        _id: "9",
        name: "T9",
        description: "Description 9",
        status: "in-progress",
      },
      {
        _id: "10",
        name: "T10",
        description: "Description 10",
        status: "in-progress",
      },
      {
        _id: "11",
        name: "T11",
        description: "Description 11",
        status: "in-progress",
      },
      {
        _id: "12",
        name: "T12",
        description: "Description 12",
        status: "in-progress",
      },
    ],
  },
  {
    _id: "4",
    name: "done",
    tasks: [],
  },
];

export default function Stack() {
  const [stacks, setStacks] = useState(initialState);

  return (
    <div className="">
      <DragDropContext
        onDragEnd={(result) => {
        }}
      >
        <div className="stack__containerStacks">
          {stacks.map((stack, i) => (
            <div className="stack__wrapStack">
              <h2>{stack.name}</h2>
              <Droppable droppableId={stack._id}>
                {/* //Droppable recibe una funcion por que usa renderProps */}
                {(droppableProvided) => (
                  <div
                    {...droppableProvided.droppableProps} //props
                    ref={droppableProvided.innerRef} //referencia
                    className="stack__Stack"
                    key={i}
                  >
                    <Task tasks={stack.tasks} />
                    {droppableProvided.placeholder} {/* placeholder */}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
