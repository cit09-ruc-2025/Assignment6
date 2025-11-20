function Pagination({ currentIndex, setCurrentIndex, totalPeople }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
      }}
    >
      <button
        className="paginationButton"
        disabled={currentIndex <= 1}
        onClick={() => setCurrentIndex((prev) => prev - 1)}
      >
        Prev
      </button>
      <button
        className={`paginationButton ${currentIndex === 1 ? "current" : ""}`}
        onClick={() => setCurrentIndex(1)}
      >
        1
      </button>
      {currentIndex > 4 && <span style={{ padding: "0 4px" }}>...</span>}
      {currentIndex - 2 > 1 && (
        <button
          className="paginationButton"
          onClick={() => setCurrentIndex(currentIndex - 2)}
        >
          {currentIndex - 2}
        </button>
      )}
      {currentIndex - 1 > 1 && (
        <button
          className="paginationButton"
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          {currentIndex - 1}
        </button>
      )}
      {currentIndex !== 1 && currentIndex !== totalPeople && (
        <button
          className="paginationButton current"
          onClick={() => setCurrentIndex(currentIndex)}
        >
          {currentIndex}
        </button>
      )}
      {currentIndex + 1 < totalPeople && (
        <button
          className="paginationButton"
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          {currentIndex + 1}
        </button>
      )}
      {currentIndex + 2 < totalPeople && (
        <button
          className="paginationButton"
          onClick={() => setCurrentIndex(currentIndex + 2)}
        >
          {currentIndex + 2}
        </button>
      )}
      {currentIndex < totalPeople - 3 && (
        <span style={{ padding: "0 4px" }}>...</span>
      )}
      <button
        className={`paginationButton ${
          currentIndex === totalPeople ? "current" : ""
        }`}
        onClick={() => setCurrentIndex(totalPeople)}
      >
        {totalPeople}
      </button>
      <button
        className="paginationButton"
        disabled={currentIndex >= totalPeople}
        onClick={() => setCurrentIndex((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
