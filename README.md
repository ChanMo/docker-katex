# Katex API

A KaTeX string format converting server.

<https://katex.org/>

## Usage

Start the API server.

``` {.bash org-language="sh"}
docker run --rm -p 3000:3000 chanmo/katex
```

## API

### Tex2Html

Convert the KaTeX string to HTML string.

Use httpie.

``` {.bash}
http POST :3000/tex2html tex="x^2" --ignore-stdin 
```

### Tex2Mathml

Convert the KaTeX string to MathML string.

Use httpie.

``` {.bash}
http POST :3000/tex2mathml tex="x^2" --ignore-stdin
```
