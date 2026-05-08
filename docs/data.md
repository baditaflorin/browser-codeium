# Static Data

browser-codeium is Mode A, so there is no scheduled data pipeline.

Static data lives in `public/data/` and is copied to `docs/data/` during `make build`.

## Contract

Current schema version: `1`

Files:

- `data/app-meta.json`
- `data/samples.json`

`data/app-meta.json` contains product metadata, public URLs, deployment mode, and capability labels.

`data/samples.json` contains the built-in sample workspace files shown on first load.

## Validation

```sh
make data
```

The validation script checks schema version and required sample fields.

## Versioning

Breaking changes move to a versioned path such as `data/v2/`. Small additive fields can remain in the current path.

## Freshness

The sample data is maintained with source commits and has no external freshness cadence.
