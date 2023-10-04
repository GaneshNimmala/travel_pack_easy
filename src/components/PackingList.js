import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItems,
  onUpdate,
  onClearList,
}) {
  const [sort, setSort] = useState("Input");
  let sortedItems;
  if (sort === "Input") {
    sortedItems = items;
  } else if (sort === "Desciption") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((listItem) => (
          <Item
            listItem={listItem}
            key={listItem.id}
            onDeleteItems={onDeleteItems}
            onUpdate={onUpdate}
            onClearList={onClearList}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="Input">Sort By Input Order</option>
          <option value="Desciption">Sort By Description</option>
          <option value="Packed_Status">Sort By Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
