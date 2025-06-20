import React, { useReducer, useState } from "react";
import { Button, Form, Container, Row, Col, ListGroup } from "react-bootstrap";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  items: [],
};

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [sortType, setSortType] = useState("name");

  const handleAddItem = () => {
    if (newItemName.trim()) {
      const newItem = {
        id: Date.now(),
        name: newItemName.trim(),
        createdAt: Date.now(),
      };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
    if (editId === id) {
      setEditId(null);
      setEditValue("");
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditValue(item.name);
  };

  const handleSave = (id) => {
    if (editValue.trim()) {
      dispatch({ type: "EDIT_ITEM", id, name: editValue.trim() });
      setEditId(null);
      setEditValue("");
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setEditValue("");
  };

  const sortedItems = [...state.items].sort((a, b) => {
    if (sortType === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.createdAt - b.createdAt;
    }
  });

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6} className="offset-md-3">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label
                className="text-center w-100"
                style={{ fontWeight: 500 }}
              >
                Enter Item:
              </Form.Label>
              <Form.Control
                type="text"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                placeholder="Enter item name"
                className="mb-2"
              />
            </Form.Group>
            <div className="d-flex justify-content-center mb-3">
              <Button
                variant="primary"
                onClick={handleAddItem}
                style={{ minWidth: 120, borderRadius: 8 }}
              >
                Add Item
              </Button>
            </div>
            <Form.Select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="mb-3"
              style={{ borderRadius: 8, fontWeight: 500 }}
            >
              <option value="name">Sort by Name</option>
              <option value="created">Sort by Created Time</option>
            </Form.Select>
          </Form>

          <ListGroup>
            {sortedItems.map((item) => (
              <ListGroup.Item
                key={item.id}
                className="mb-2"
                style={{
                  borderRadius: 12,
                  boxShadow: "0 2px 12px #0001",
                  background: "#fff",
                  border: "none",
                }}
              >
                {editId === item.id ? (
                  <div className="d-flex align-items-center">
                    <Form.Control
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="me-2"
                      style={{ background: "#f8f9fa", borderRadius: 8 }}
                    />
                    <Button
                      variant="success"
                      size="sm"
                      className="me-2"
                      style={{ minWidth: 70, fontWeight: 500 }}
                      onClick={() => handleSave(item.id)}
                    >
                      Save
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      style={{ minWidth: 70, fontWeight: 500 }}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex align-items-center justify-content-between">
                    <span style={{ fontSize: 18 }}>{item.name}</span>
                    <div>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        style={{
                          minWidth: 70,
                          fontWeight: 500,
                          color: "#fff",
                          background: "#ffc107",
                          border: "none",
                        }}
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        style={{ minWidth: 70, fontWeight: 500 }}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
