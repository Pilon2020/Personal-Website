// Utility to convert lightweight layout directives in Markdown into HTML
// wrappers that ReactMarkdown can render with rehypeRaw enabled.
const ATTR_RE = /(\w+)=(".*?"|'.*?'|[^\s]+)/g;

function parseAttributes(raw = '') {
  const attrs = {};
  let match;
  while ((match = ATTR_RE.exec(raw))) {
    const key = match[1];
    let value = match[2] || '';
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    attrs[key] = value;
  }
  return attrs;
}

export function applyLayoutDirectives(markdown = '') {
  if (!markdown) return '';

  let output = markdown;

  // Grid block: [[grid cols=3 gap=1.5rem min=240px]] ... [[/grid]]
  output = output.replace(
    /\[\[grid([^\]]*)\]\]\s*([\s\S]*?)\s*\[\[\/grid\]\]/g,
    (_full, attrStr = '', inner = '') => {
      const attrs   = parseAttributes(attrStr);
      const cols    = attrs.cols || attrs.columns || 'auto-fit';
      const gap     = attrs.gap || '1rem';
      const min     = attrs.min || attrs.minWidth || '240px';
      const align   = attrs.align || 'start';
      const justify = attrs.justify || 'stretch';

      const style = [
        `--grid-cols:${cols}`,
        `--grid-gap:${gap}`,
        `--grid-min:${min}`,
        `--grid-align:${align}`,
        `--grid-justify:${justify}`
      ].join(';');

      return `<div class="layout-grid" style="${style}">\n${inner.trim()}\n</div>`;
    }
  );

  // Column splitter: [[columns cols=2 gap=1.5rem]] ... --- ... [[/columns]]
  output = output.replace(
    /\[\[columns([^\]]*)\]\]\s*([\s\S]*?)\s*\[\[\/columns\]\]/g,
    (_full, attrStr = '', inner = '') => {
      const attrs = parseAttributes(attrStr);
      const gap   = attrs.gap || '1.25rem';
      const min   = attrs.min || attrs.minWidth || '240px';
      const align = attrs.align || 'start';
      const rawCols = attrs.cols || attrs.columns;

      const segments = inner
        .trim()
        .split(/^\s*---\s*$/m)
        .map(s => s.trim())
        .filter(Boolean);

      const colCount = rawCols || segments.length || 2;

      const style = [
        `--grid-cols:${colCount}`,
        `--grid-gap:${gap}`,
        `--grid-min:${min}`,
        `--grid-align:${align}`
      ].join(';');

      const columnsHtml = segments
        .map(block => `<div class="layout-col">\n${block}\n</div>`)
        .join('');

      return `<div class="layout-grid" style="${style}">\n${columnsHtml}\n</div>`;
    }
  );

  // Figure helper: [[figure src="/path" alt="..." caption="..." align=left width=320px]]
  output = output.replace(
    /^\s*\[\[figure([^\]]*)\]\]\s*$/gm,
    (full, attrStr = '') => {
      const attrs    = parseAttributes(attrStr);
      const src      = attrs.src || '';
      if (!src) return full; // leave untouched if required data missing

      const alt      = attrs.alt || '';
      const caption  = attrs.caption || '';
      const align    = attrs.align || '';
      const width    = attrs.width || attrs.w || '';
      const height   = attrs.height || attrs.h || '';
      const figStyleRaw = attrs.style || '';

      const classes = ['layout-figure'];
      if (align) classes.push(`align-${align}`);

      const imgStyle = [];
      if (width)  imgStyle.push(`max-width:${width}`);
      if (height) imgStyle.push(`max-height:${height}`);
      const imgStyleStr = imgStyle.length ? ` style="${imgStyle.join(';')}"` : '';

      const figStyle = [];
      if (figStyleRaw) figStyle.push(figStyleRaw);
      const figStyleStr = figStyle.length ? ` style="${figStyle.join(';')}"` : '';

      return `<figure class="${classes.join(' ')}"${figStyleStr}><img src="${src}" alt="${alt}"${imgStyleStr} />${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
    }
  );

  return output;
}
