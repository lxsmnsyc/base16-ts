import { schemes } from 'base16-ts';
import { JSX } from 'solid-js';
import { RouterParams, useRouter } from 'solid-tiny-router';
import PageContent from '../components/PageContent';

interface PageParams extends RouterParams {
  scheme: string;
}

export default function Page(): JSX.Element {
  const router = useRouter<PageParams>();

  const scheme = $memo(router.params.scheme);
  const originalScheme = $memo(scheme.replace(/-./g, (x) => x.toUpperCase()[1]));
  const shouldShow = $memo(originalScheme in schemes || scheme in schemes);

  return (
    <solid:show when={shouldShow}>
      <PageContent
        scheme={originalScheme as keyof typeof schemes}
      />
    </solid:show>
  );
}
