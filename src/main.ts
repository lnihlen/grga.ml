import './style.css'
import 'monaco-editor/esm/vs/editor/editor.all.js';

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

monaco.editor.create(document.getElementById('container')!, {
  value: "Paste your SuperCollider code here",
  theme: 'vs-dark',
  automaticLayout: true
});

function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}

setupCounter(document.querySelector<HTMLButtonElement>('#formatButton')!);