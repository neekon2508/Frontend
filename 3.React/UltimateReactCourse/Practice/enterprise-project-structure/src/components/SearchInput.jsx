import { ListItem, DropDownList } from "smart-webcomponents-react/DropDownList";
import "smart-webcomponents-react/source/styles/smart.default.css";
function SearchInput({ data, handleSearch }) {
  return (
    <>
      <div style={{ minHeight: "35px", height: "auto", width: "300px" }}>
        <DropDownList selectedIndexes={[0]} filterable>
          {data.map((user, index) => {
            return (
              <ListItem key={user.id} value={index}>
                {user.username}
              </ListItem>
            );
          })}
        </DropDownList>
      </div>
    </>
  );
}

export default SearchInput;
