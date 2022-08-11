import React, { useState } from "react";

export default function TodoApp() {
  const [inputData, setData] = useState("");

  const [items, setItems] = useState([]);

  //AddItem Function
  const AddItem = () => {
    if (!inputData) {
      return null;
    } else {
      setItems([inputData, ...items]);
      setData("");
    }
  };

  //DeleteItems Function here
  const deleteItem = (id) => {
    const updatedItems = items.filter((_ele, ind) => ind !== id);
    setItems([...updatedItems]);
  };

  //RemoveAll Function Here
  const RemoveItems = () => {
    setItems([]);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <figure className="mt-4 d-flex justify-content-center">
              <img
                className="image"
                src="/Assets/notebook.png"
                alt="notebooklogo"
              />
            </figure>
            <h4 className="text-center text-dark">
              Add Your List Here &nbsp;
              <span>
                <i className="text-info bi bi-save2"></i>
              </span>
            </h4>
            {/* Add TODO List Section Starts*/}
            <div className="input-group mb-3">
              <input
                type="text"
                value={inputData}
                onChange={(e) => setData(e.target.value)}
                className="form-control p-2"
                placeholder="✍ Add lists..."
              />
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={AddItem}
                title="Add Items"
              >
                <i className=" fw-bold h4 bi bi-journal-plus"></i>
              </button>
            </div>
            {/* Add TODO List Section Ends */}
          </div>
        </div>
        {/* Added TODO Lists Section Starts */}
        <div className="row">
          <div className="col-md-5 mx-auto">
            {items.map((item, ind) => (
              <div
                className="d-flex justify-content-between btn btn-outline-dark mt-2 pt-3"
                key={ind}
              >
                <h4>{item}</h4>
                <i
                  className="h5 bi bi-trash3 text-danger"
                  onClick={() => deleteItem(ind)}
                  title="Delete Item"
                ></i>
              </div>
            ))}
          </div>
        </div>
        {/* Added TODO Lists Section Ends */}
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-danger" onClick={RemoveItems}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
}
