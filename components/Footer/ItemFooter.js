export default function ItemFooter(props) {
  return (
    <>
      <h4 className="text-2xl font-bold">{props.title}</h4>
      <p className="mt-5 mb-4 font-bold">{props.sub1}</p>
      <p className="text-lg font-medium">{props.sub2}</p>
    </>
  );
}
