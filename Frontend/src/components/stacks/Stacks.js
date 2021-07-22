export default function Stacks() {
  const stacks = [
    {
      name: "all",
      tasks: [
        { name: "T1", description: "Description 1", status: "all" },
        { name: "T2", description: "Description 2", status: "all" },
        { name: "T3", description: "Description 3", status: "all" },
        { name: "T4", description: "Description 4", status: "all" },
      ],
    },
    {
      name: "todo",
      tasks: [
        { name: "T5", description: "Description 5", status: "todo" },
        { name: "T6", description: "Description 6", status: "todo" },
        { name: "T7", description: "Description 7", status: "todo" },
        { name: "T8", description: "Description 8", status: "todo" },
      ],
    },
    {
      name: "in-progress",
      tasks: [
        { name: "T9", description: "Description 9", status: "in-progress" },
        { name: "T10", description: "Description 10", status: "in-progress" },
        { name: "T11", description: "Description 11", status: "in-progress" },
        { name: "T12", description: "Description 12", status: "in-progress" },
      ],
    },
    {
      name: "done",
      tasks: [],
    },
  ];

  return <Stack stacks={stacks} />;
}

function Stack({ stacks }) {
  const stacksToDraw = [];

  for (const [index, value] of stacks.entries()) {
    stacksToDraw.push(
      <div className="stack__Stack" key={index}>
        <h2>{value.name}</h2>
        <div className="row">
          <div className="col">
            <Task tasks={value.tasks} />
          </div>
        </div>
      </div>
    );
  }

  return <div className="stack__containerStacks">{stacksToDraw}</div>;
}

function Task({ tasks }) {
  const taskToStack = [];

  for (const [index, value] of tasks.entries()) {
    taskToStack.push(
      <div
        className="task__containerTask"
        draggable="true"
        ondragstart={drag(event)}
        key={index}
      >
        <div className="row">
          <div className="col">
            <div className="row name">
              <div className="col">Name: {value.name}</div>
            </div>
            <div className="row description">
              <div className="col">Description: {value.description}</div>
            </div>
            <div className="row status">
              <div className="col">Status: {value.status}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{taskToStack}</div>;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
