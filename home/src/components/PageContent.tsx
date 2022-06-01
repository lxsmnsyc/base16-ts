import { schemes } from 'base16-ts';
import { JSX } from 'solid-js';
import ColorCard from './ColorCard';
import Footer from './Footer';
import Highlighter from './Highlighter';
import SchemeTitle from './SchemeTitle';
import Navigator from './Navigator';

interface PageContentProps {
  scheme: keyof typeof schemes;
}

export default function PageContent(props: PageContentProps): JSX.Element {
  const currentScheme = $memo(schemes[props.scheme]);

  $effect(() => {
    // Update root variables
    const root = document.documentElement;
    root.style.setProperty('--base00', currentScheme.base00);
    root.style.setProperty('--base01', currentScheme.base01);
    root.style.setProperty('--base02', currentScheme.base02);
    root.style.setProperty('--base03', currentScheme.base03);
    root.style.setProperty('--base04', currentScheme.base04);
    root.style.setProperty('--base05', currentScheme.base05);
    root.style.setProperty('--base06', currentScheme.base06);
    root.style.setProperty('--base07', currentScheme.base07);
    root.style.setProperty('--base08', currentScheme.base08);
    root.style.setProperty('--base09', currentScheme.base09);
    root.style.setProperty('--base0A', currentScheme.base0A);
    root.style.setProperty('--base0B', currentScheme.base0B);
    root.style.setProperty('--base0C', currentScheme.base0C);
    root.style.setProperty('--base0D', currentScheme.base0D);
    root.style.setProperty('--base0E', currentScheme.base0E);
    root.style.setProperty('--base0F', currentScheme.base0F);
  });

  return (
    <div class="container">
      <SchemeTitle scheme={currentScheme} />
      <section>
        <h3>{`by: ${currentScheme.author}`}</h3>
        <Navigator scheme={props.scheme} />
      </section>
      <section class="color-cards">
        <ColorCard name="00" color={currentScheme.base00} />
        <ColorCard name="01" color={currentScheme.base01} />
        <ColorCard name="02" color={currentScheme.base02} />
        <ColorCard name="03" color={currentScheme.base03} />
        <ColorCard name="04" color={currentScheme.base04} />
        <ColorCard name="05" color={currentScheme.base05} />
        <ColorCard name="06" color={currentScheme.base06} />
        <ColorCard name="07" color={currentScheme.base07} />
        <ColorCard name="08" color={currentScheme.base08} />
        <ColorCard name="09" color={currentScheme.base09} />
        <ColorCard name="0A" color={currentScheme.base0A} />
        <ColorCard name="0B" color={currentScheme.base0B} />
        <ColorCard name="0C" color={currentScheme.base0C} />
        <ColorCard name="0D" color={currentScheme.base0D} />
        <ColorCard name="0E" color={currentScheme.base0E} />
        <ColorCard name="0F" color={currentScheme.base0F} />
      </section>
      <section>
        <h4>Example Code</h4>
        <Highlighter
          content={`import { scheme } from 'base16-ts'
          
const myNumber = 0;
const regexp = /[abc]/;

// This is a comment
class Scheme {
  public name: string;
  public author: string;

  constructor(attributes: { name: string, author: string }) {
    this.name = attributes.name;
    this.author = attributes.author;
  }

  public static greet() {
    return 'Hello';
  }
}

const person1 = new Person({
  name: '${currentScheme.scheme}',
  author: '${currentScheme.author}',
});

console.log(\`\${Person.greet()} \${person1.name}\`);
`}
        />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
