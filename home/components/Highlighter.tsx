import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import { useEffect, useRef } from 'react';

hljs.registerLanguage('typescript', typescript);

interface HighlighterProps {
  content: string;
}

export default function Highlighter({ content }: HighlighterProps): JSX.Element {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current) {
      hljs.highlightElement(ref.current);
    }
  }, [content]);

  return (
    <code ref={ref} className="code">
      {content}
    </code>
  );
}