export default function HeadSection(props) {
  return (
    <>
      <h4 className="text-3xl font-bold text-primary">{props.section}</h4>
      <h2 className="mt-5 text-5xl font-bold">{props.title}</h2>
    </>
  );
}
