import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";

export default function Task({ tasks }) {
  const [myTasks, setMyTasks] = useState(tasks);

  return myTasks.map((task, i) => (
    <Draggable key={task._id} draggableId={task._id} index={i}>
      {(draggableProvided) => (
        <div
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
          className="row"
          className="task__containerTask"
        >
          <div className="col">
            <div className="row name">
              <div className="col">Name: {task.name}</div>
            </div>
            <div className="row description">
              <div className="col">Description: {task.description}</div>
            </div>
            <div className="row status">
              <div className="col">Status: {task.status}</div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  ));
}

function ChangeStateTask(result, setStacks) {

  const { source, destination } = result;
  if (!destination) {
    return;
  }

  if (
    source.index === destination.index &&
    source.droppableId === destination.droppableId
  ) {
    return;
  }

  setStacks((prevStacks) =>
    Reorder(prevStacks, source.index, destination.index)
  );
}

function Reorder(list, startIndex, endIndex) {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
