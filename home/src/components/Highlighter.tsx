import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { JSX } from 'solid-js';

hljs.registerLanguage('typescript', typescript);

interface HighlighterProps {
  content: string;
}

export default function Highlighter({ content }: HighlighterProps): JSX.Element {
  let ref: HTMLElement | undefined;

  $effect(() => {
    if (ref) {
      hljs.highlightElement(ref);
    }
  });

  return (
    <code ref={ref} class="code">
      {content}
    </code>
  );
}
