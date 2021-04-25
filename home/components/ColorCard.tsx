export default function ColorCard({ name, color }): JSX.Element {
  return (
    <div className="color-card">
      <div className="color-card-content">
        <span className="color-card-name">{name}</span>
        <span className="color-card-value">{color}</span>
      </div>
    </div>
  );
}