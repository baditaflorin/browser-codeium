# Phase 2 Real-Data Performance

Date: 2026-05-09

Command: local `vite-node` measurement of `analyzeWithFallback` over the 10 committed real-data fixtures, 7 runs per fixture, median and worst recorded.

| Fixture                               | Shape                | Confidence |     Bytes |  Median |    Worst |
| ------------------------------------- | -------------------- | ---------- | --------: | ------: | -------: |
| 01 React Hooks                        | normal-module        | high       |     6,864 |  0.85ms |   3.49ms |
| 02 Next client                        | entrypoint           | high       |    31,561 |  2.18ms |  70.17ms |
| 03 Vue component                      | framework-runtime    | high       |    34,953 |  1.37ms |   3.83ms |
| 04 TypeScript checker                 | huge-file            | low        | 3,151,774 | 61.83ms | 129.70ms |
| 05 Prettier postprocess               | pipeline             | high       |     8,565 |  0.36ms |   1.15ms |
| 06 Django base                        | unsupported-language | low        |    99,353 |  0.28ms |  13.08ms |
| 07 Kubernetes scheduler               | unsupported-language | low        |    25,558 |  0.09ms |   0.57ms |
| 08 jQuery minified                    | minified-bundle      | low        |    87,533 |  0.17ms |   0.51ms |
| 09 Svelte client index                | barrel-file          | high       |     5,756 |  0.27ms |   0.53ms |
| 10 TypeScript checker truncated paste | partial-input        | low        |   180,000 |  6.22ms |   8.88ms |

Aggregate: median fixture median 0.85ms; worst observed run 129.70ms on the huge-file guard path.

Notes:

- The huge-file path intentionally avoids deep parsing and reports low confidence.
- Browser tree-sitter timings vary by grammar load state; the regression gate focuses on deterministic analysis shape/output.
- No fixture exceeded the 300ms progress threshold during this local measurement.
