# Aiken Assist Library

A library of specialized Aiken functions for smart contracts on Cardano.

It extends the default library with routines that will assist in quick development.

## Using the library

Add this to the dependency section of the `aiken.toml` file:

```
[[dependencies]]
name = "logicalmechanism/assist"
version = "main"
source = "github"
```

Import the module like:

```aiken
use assist/signing
use assist/count
```

## Documentation

Build the documentation locally with `aiken docs` or view the [documentation](https://htmlpreview.github.io/?https://raw.githubusercontent.com/logicalmechanism/assist/main/docs/index.html).