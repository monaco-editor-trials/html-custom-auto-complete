import * as monaco from 'monaco-editor';
import { languages } from 'monaco-editor';

import './style.css';

/**
 * @source https://stackoverflow.com/a/69806945/6940144
 */
(async function () {
  const editorElement = document.getElementById('editor');

  monaco.editor.create(editorElement!, {
    value:
      '<!DOCTYPE html>\n<html>\n  <body>\n    <!-- Start Here, Type: div, img or a -->\n\n  </body>\n</html>',
    language: 'html',
    theme: 'vs-dark',
    minimap: {
      enabled: false,
    },
  });

  monaco.languages.registerCompletionItemProvider('html', {
    provideCompletionItems:
      (): languages.ProviderResult<languages.CompletionList> => {
        const suggestions = [
          {
            label: 'div',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: '<div>\n\t$0\n</div>',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Insert a <div> element',
          },
          {
            label: 'img',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: '<img src="$1" alt="$2">',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Insert an <img> element',
          },
          {
            label: 'a',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: '<a href="$1">$2</a>',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Insert an <a> element',
          },
        ];

        return { suggestions } as languages.CompletionList;
      },
  });
})();
