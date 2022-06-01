import { Base16Scheme } from 'base16-ts';
import { Title } from 'solid-meta';

interface SchemeTitleProps {
  scheme: Base16Scheme
}

export default function SchemeTitle(props: SchemeTitleProps) {
  return (
    <>
      <Title>{`base16-ts ${props.scheme.scheme}`}</Title>
      <h1 class="scheme">{`base16-ts ${props.scheme.scheme}`}</h1>
    </>
  );
}
