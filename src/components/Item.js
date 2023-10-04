export default function Item({ listItem, onDeleteItems, onUpdate }) {
    return (
      <li>
        <input
          type="checkbox"
          value={listItem.packed}
          onChange={() => onUpdate(listItem.id)}
        />
        <span style={listItem.packed ? { textDecoration: "line-through" } : {}}>
          {listItem.quantity}
          {listItem.description}
        </span>
        <button onClick={() => onDeleteItems(listItem.id)}>❌</button>
      </li>
    );
  }
  