import { JSX } from 'solid-js';

export default function ColorCard(
  props: Record<string, string>,
): JSX.Element {
  return (
    <div class="color-card">
      <div class="color-card-content">
        <span class="color-card-name">{props.name}</span>
        <span class="color-card-value">{props.color}</span>
      </div>
    </div>
  );
}
