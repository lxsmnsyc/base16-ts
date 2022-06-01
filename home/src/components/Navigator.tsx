import { schemes } from 'base16-ts';
import { For, JSX } from 'solid-js';
import { useRouter } from 'solid-tiny-router';

const kebabize = (str: string) => str.split('')
  .map((letter, idx) => (
    letter.toUpperCase() === letter
      ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
      : letter
  ))
  .join('');

interface NavigatorProps {
  scheme: string;
}

export default function Navigator(props: NavigatorProps): JSX.Element {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (
    <select
      value={props.scheme}
      onChange={(e) => {
        router.push(`/${kebabize(e.currentTarget.value)}`);
      }}
    >
      <For each={Object.entries(schemes)}>
        {([key, value]) => (
          <option
            value={key}
            onMouseEnter={() => {
              router.prefetch(`/${kebabize(key)}`);
            }}
          >
            {value.scheme}
          </option>
        )}
      </For>
    </select>
  );
}
