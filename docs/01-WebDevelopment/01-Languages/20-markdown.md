---
sidebar_position: 10
title: Markdown & LaTex
---

## 1. **Markdown**
### Overview  
A lightweight markup language for creating formatted text with plain syntax. Ideal for documentation, blogs, and simple content creation.

### Usage  
- **Knowledge Bases**: Use with tools like [Docusaurus](https://docusaurus.io/) to build documentation sites and blogs.  
- **Project READMEs**: Explain code, setup steps, and workflows in GitHub/GitLab repositories.  
- **Collaboration**: Write issue templates, discussion threads, or wikis in platforms like GitHub or Slack.  

### Key Features  
```markdown
- **Headers**: `# H1`, `## H2`
- **Emphasis**: `*italic*`, `**bold**`
- **Lists**:
  - `- Item 1` (unordered)
  - `1. Item 1` (ordered)
- **Links**: `[text](url)`
- **Images**: `![alt](path)`
- **Code**: `` `inline` `` or triple backticks for blocks
- **Tables**: Pipe syntax (`| Col1 | Col2 |`)
```

### Learning Resources  
- [Markdown Guide](https://www.markdownguide.org/)  
- [CommonMark Syntax](https://commonmark.org/help/)  

---

## 2. **TeX/LaTeX**
### Overview  
A typesetting system designed for precision in complex documents, especially academic papers, books, and technical reports.

### Usage  
- **Academic Papers**: Format equations, references, and figures for journals (e.g., IEEE, Springer).  
- **Books/Theses**: Automate table of contents, footnotes, and cross-references.  
- **Resumes/CVs**: Craft polished layouts with tools like [ModernCV](https://www.overleaf.com/latex/templates/tagged/cv).  
- **STEM Content**: Write complex math formulas with native LaTeX support.  

### Key Features  
```tex
% Document structure
\documentclass{article}
\begin{document}
\section{Title}

% Math (LaTeX's strength)
\[ E = mc^2 \]

% Cross-references
\label{sec:intro}
See Section~\ref{sec:intro}.

% Bibliographies
\cite{key}
\end{document}
```

### Learning Resources  
- [Overleaf (LaTeX Editor)](https://www.overleaf.com/learn)  
- [LaTeX Project Documentation](https://www.latex-project.org/help/documentation/)  
- [CTAN (Packages)](https://www.ctan.org/)  

---

## 3. **Comparison**
| Feature          | Markdown          | TeX/LaTeX         |
|------------------|-------------------|-------------------|
| **Learning Curve** | Easy             | Difficult         |
| **Math Support**   | Limited (via extensions) | Native          |
| **Tables**         | Basic            | Advanced          |
| **Automation**     | Minimal          | Extensive (macros)|
| **Output Quality** | Good             | Professional      |

