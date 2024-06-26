import newCollection from "../assets/new_collections";
import Item from "../items/Item";
import "./NewCollections.css";

function NewCollections() {
  return (
    <>
      <div className="new-collections">
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
          {newCollection.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NewCollections;
