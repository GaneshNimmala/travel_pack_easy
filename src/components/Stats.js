export default function Stats({ items }) {
  const itemsCount = items.length;
  const packedCount = items.filter((element) => element.packed).length;
  const percentage = Math.round((packedCount / itemsCount) * 100);
  if (itemsCount === 0)
    return (
      <p className="stats">Start adding some items to your Packing lists 🚚</p>
    );
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You are ready to go ✈</em>
      ) : (
        <em>
          🧳 You have {itemsCount} items on your list, and you already packed
          {packedCount} {percentage}%
        </em>
      )}
    </footer>
  );
}
