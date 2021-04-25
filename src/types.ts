/**
 * Based on
 * - https://github.com/chriskempson/base16
 */
export interface Base16Scheme {
  readonly scheme: string;
  readonly author: string;
  /**
   * Default Background
   */
  readonly base00: string;
  /**
   * Lighter Background (Used for status bars, line number and folding marks)
   */
  readonly base01: string;
  /**
   *  Selection Background
   */
  readonly base02: string;
  /**
   * Comments, Invisibles, Line Highlighting
   */
  readonly base03: string;
  /**
   * Dark Foreground (Used for status bars)
   */
  readonly base04: string;
  /**
   * Default Foreground, Caret, Delimiters, Operators
   */
  readonly base05: string;
  /**
   * Light Foreground (Not often used)
   */
  readonly base06: string;
  /**
   * Light Background (Not often used)
   */
  readonly base07: string;
  /**
   * Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
   */
  readonly base08: string;
  /**
   * Integers, Boolean, Constants, XML Attributes, Markup Link Url
   */
  readonly base09: string;
  /**
   * Classes, Markup Bold, Search Text Background
   */
  readonly base0A: string;
  /**
   * Strings, Inherited Class, Markup Code, Diff Inserted
   */
  readonly base0B: string;
  /**
   * Support, Regular Expressions, Escape Characters, Markup Quotes
   */
  readonly base0C: string;
  /**
   * Functions, Methods, Attribute IDs, Headings
   */
  readonly base0D: string;
  /**
   * Keywords, Storage, Selector, Markup Italic, Diff Changed
   */
  readonly base0E: string;
  /**
   * Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
   */
  readonly base0F: string;
}

export interface Schemes {
  readonly [key: string]: Base16Scheme,
}
