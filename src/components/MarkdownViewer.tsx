import ReactMarkdown from 'react-markdown';

export const MarkdownViewer = ({ content }: { content: string }) => (
  <div className="prose max-w-none prose-headings:text-foreground prose-p:text-secondary-foreground  prose-a:text-secondary-foreground  prose-a:no-underline prose-ul:text-secondary-foreground prose-ol:text-secondary-foreground prose-strong:text-secondary-foreground">
    <ReactMarkdown
      components={{
        a: ({ href, children }) => {
          const isExternal = href?.startsWith("http");
          if (!isExternal) {
            return (
              <a
                href={href}>
                {children}
              </a>
            )
          }
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"

            >
              <div className="flex items-center text-foreground hover:underline">
                <span className="text-md">🔗</span>
                <span className="font-medium truncate">{children}</span>
              </div>
            </a>
          );
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        h2: ({ node, ...props }) => (
          <h2 {...props} className="scroll-mt-24" />
        ),
      }}
    >{content}</ReactMarkdown>
  </div>
);