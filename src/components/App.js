import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Visa", quantity: 2, packed: false },
//   { id: 4, description: "Shoos", quantity: 12, packed: false },
// ];

export default function App() {
  const [item, setItem] = useState([]);
  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItem((items) => items.filter((element) => element.id !== id));
  }

  function handleChecked(id) {
    setItem((items) =>
      items.map((element) =>
        element.id === id ? { ...element, packed: !item.packed } : element
      )
    );
  }
  function handleClearList() {
    const confirmation = window.confirm(
      "Are you sure you want to delete all items in the list ✂"
    );
    if (confirmation) setItem((items) => (items = []));
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={item}
        onDeleteItems={handleDeleteItems}
        onUpdate={handleChecked}
        onClearList={handleClearList}
      />
      <Stats items={item} />
    </div>
  );
}
