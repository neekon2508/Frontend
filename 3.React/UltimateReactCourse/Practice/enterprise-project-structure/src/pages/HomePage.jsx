import { useState } from "react";

import { useLoginHistories } from "../contexts/LoginHistoriesContext";
import SearchResult from "../components/SearchResult";
import SearchInput from "../components/searchInput";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { loginHistories } = useLoginHistories();
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    const results = loginHistories.filter((user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(results);
  };

  return (
    <div>
      <SearchInput data={loginHistories} handleSearch={handleSearch} />
      {searchResult.length > 0 ? (
        <div>
          <h3>Kết quả tìm kiếm:</h3>
          <ul>
            {searchResult.map((user) => (
              <li key={user.id}>
                <SearchResult
                  id={user.id}
                  username={user.username}
                  department={user.department}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        searchQuery && <p>Không tìm thấy kết quả...</p>
      )}
    </div>
  );
}

export default HomePage;
