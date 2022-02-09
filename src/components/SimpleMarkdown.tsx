import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // `rehype-katex` does not import the CSS for you
import styles from './SimpleMarkdown.module.css';
import { useTranslation } from 'react-i18next';

const Editor: React.FC<{
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = (props) => {
  return (
    <div className={styles.editorContainer}>
      <textarea
        className={styles.textarea}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

const Preview: React.FC<{ markdown: string }> = (props) => {
  return (
    <div className={styles.previewContainer}>
      <ReactMarkdown
        className={styles.linebreak}
        children={props.markdown}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          code({ children }) {
            return (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark}
                language="js"
                PreTag="div"
              />
            );
          },
        }}
      />
    </div>
  );
};

const SimpleMarkdown = () => {
  const { t } = useTranslation('markdown');

  const [markdown, setMarkdown] = useState<string>(t('markdown'));

  const onMarkdownHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <h1>Hocam ekliyoruz feat messages</h1>
      <h2>feat 1 </h2>
      <button onClick={() => setMarkdown(t('gfm'))}>
        Plugin: remark-gfm
      </button>
      <button onClick={() => setMarkdown(t('math'))}>
        Plugin: remark-math and katex
      </button>
      <button onClick={() => setMarkdown(t('syntax'))}>
        React Syntax Highlighter
      </button>
      <div className={styles.container}>
        <Editor value={markdown} onChange={onMarkdownHandler} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
};

export default SimpleMarkdown;
