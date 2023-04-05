import { MouseEvent, useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  // items = []
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>list</h1>
      {/* { items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={
              () => {
                setSelectedIndex(index);
                onSelectItem(item)
              }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
