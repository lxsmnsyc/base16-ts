import {
  GetServerSidePropsContext,
  GetStaticPropsContext,
} from 'next';
import { schemes } from 'base16-ts';
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import PageContent from '../components/PageContent';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

interface PageProps extends ParsedUrlQuery {
  scheme: string;
}

export const getStaticProps = async (
  context: GetStaticPropsContext<PageProps>,
) => {
  const scheme = context.params.scheme;
  const originalScheme = scheme.replace(/-./g, x=>x.toUpperCase()[1]);
  if (originalScheme in schemes || scheme in schemes) {
    return {
      props: {
        scheme: originalScheme,
      },
      revalidate: 1,
    };
  }

  return {
    notFound: true,
  };
};


export default function Page({ scheme }: PageProps): JSX.Element {
  const router = useRouter()
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <PageContent
      scheme={scheme}
    />
  );
}