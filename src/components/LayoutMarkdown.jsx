import React, { useMemo } from 'react';
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { applyLayoutDirectives } from '../utils/layoutDirectives';

const ABSOLUTE_URL_RE = /^[a-zA-Z][a-zA-Z0-9+.-]*:/;

const normalizeBasePath = (basePath = '') => {
  if (!basePath) return '';
  const withLeadingSlash = basePath.startsWith('/') ? basePath : `/${basePath}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

const isRelative = url =>
  url &&
  !ABSOLUTE_URL_RE.test(url) &&
  !url.startsWith('//') &&
  !url.startsWith('/');

const resolveRelativeUrl = (url, normalizedBase) => {
  if (!normalizedBase || !isRelative(url)) return url;
  try {
    const resolved = new URL(url, `http://local${normalizedBase}`);
    return `${resolved.pathname}${resolved.search}${resolved.hash}`;
  } catch {
    return url;
  }
};

export default function LayoutMarkdown({ markdown = '', components = {}, basePath = '', ...rest }) {
  const prepared = useMemo(() => applyLayoutDirectives(markdown), [markdown]);
  const normalizedBase = useMemo(() => normalizeBasePath(basePath), [basePath]);

  const urlTransform = useMemo(
    () => (url, key, node) => {
      const safeUrl = defaultUrlTransform(url);
      if (!safeUrl) return safeUrl;

      if (normalizedBase && key === 'src' && node?.tagName === 'img') {
        return resolveRelativeUrl(safeUrl, normalizedBase);
      }

      return safeUrl;
    },
    [normalizedBase]
  );

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      urlTransform={urlTransform}
      components={{
        a: ({ node, children, ...props }) => (
          <a {...props} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
        table: ({ node, ...props }) => (
          <div className="table-wrapper">
            <table {...props} />
          </div>
        ),
        ...components
      }}
      {...rest}
    >
      {prepared}
    </ReactMarkdown>
  );
}
