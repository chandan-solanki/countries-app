

export default function BorderBtn({ name, handler }) {
  return (
    <span  onClick={handler} className="border-cntry-btn">
      {name}
    </span>
  );
}
