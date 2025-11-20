function Movie({ movie }) {
  const { title, release_date, overview, name, first_air_date } = movie;
  return (
    <div
      style={{
        padding: "12px 10px",
        border: "1px solid #c9c9c9",
        borderRadius: "4px",
        width: "100%",
      }}
    >
      <h3>{title ?? name}</h3>
      <p style={{ fontSize: "12px", color: "#6b6b6bff", paddingBottom: "8px" }}>
        {release_date ?? first_air_date}
      </p>
      <p>{overview}</p>
    </div>
  );
}
export default Movie;
