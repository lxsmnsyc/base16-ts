import { schemes } from 'base16-ts';
import { useRouter } from 'next/router';

const kebabize = str => {
  return str.split('').map((letter, idx) => {
    return letter.toUpperCase() === letter
     ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
     : letter;
  }).join('');
}

interface NavigatorProps {
  scheme: string;
}

export default function Navigator({ scheme }: NavigatorProps): JSX.Element {
  const router = useRouter();
  return (
    <select
      defaultValue={scheme}
      onChange={(e) => {
        router.push(`/${kebabize(e.currentTarget.value)}`);
      }}
    >
      {
        Object.entries(schemes).map(([key, value]) => (
          <option
            key={key}
            value={key}
            onMouseEnter={(e) => {
              router.prefetch(`/${kebabize(key)}`);
            }}
          >
            {value.scheme}
          </option>
        ))
      }
    </select>
  );
}