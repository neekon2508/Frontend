function SearchResult({ id, username, department }) {
  // if (!result) return null;

  return (
    <div>
      <p>
        <strong>User ID:</strong> {id}
      </p>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Department:</strong> {department}
      </p>
    </div>
  );
}

export default SearchResult;
