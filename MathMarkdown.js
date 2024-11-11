import React from "react";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import sanitizeHtml from "sanitize-html";

const MathRenderer = ({ htmlContent }) => {
  console.log(htmlContent);

  const html = sanitizeHtml(htmlContent, {
    allowedTags: ["p", "br", "strong", "ol", "li", "em", "span"],
    allowedAttributes: {
      "*": ["style"],
    },
    allowedSchemes: ["http", "https"],
  });
  return (
    <MathJaxContext>
      <MathJax hideUntilTypeset="every">
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </MathJax>
    </MathJaxContext>
  );
};

export default MathRenderer;
