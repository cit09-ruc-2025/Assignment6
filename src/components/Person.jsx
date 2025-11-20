import ImagesFor from "./ImagesFor";
import Movie from "./Movie";

function Person({ person }) {
  const { id, name, known_for_department, known_for } = person;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "30px 20px",
        border: "1px solid #c9c9c9",
        borderRadius: "4px",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>{name}</h2>
        <p
          style={{
            fontSize: "14px",
            color: "#6b6b6bff",
          }}
        >
          {known_for_department}
        </p>
      </div>

      {known_for?.length && (
        <>
          <p style={{ textDecoration: "underline", fontWeight: "600" }}>
            Known For
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {known_for.map((m) => (
              <Movie movie={m} key={m.id} />
            ))}
          </div>
        </>
      )}
      <ImagesFor id={id} />
    </div>
  );
}

export default Person;
