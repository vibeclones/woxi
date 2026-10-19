/* tslint:disable */
/* eslint-disable */
/**
 * Register (or replace) an in-memory file so `Import["name"]` can read it
 * in the browser.
 */
export function set_virtual_file(name: string, data: Uint8Array): void;
/**
 * Remove all host-registered in-memory files.
 */
export function clear_virtual_files(): void;
/**
 * Return every file produced by `Export` since the last call as a JSON array
 * of `{"name":…, "data":<base64>[, "rasterize":"png"]}`, then clear the store.
 * The host decodes each base64 payload into a Blob and renders a download
 * link; entries carrying `rasterize` hold SVG the host converts to that raster
 * format first. Draining on read keeps each evaluation's exports separate.
 */
export function take_exported_files(): string;
/**
 * Split `input` into top-level statements and return a JSON array of strings.
 * Lets the front-end loop one statement at a time so output (and side
 * effects like `Pause[n]`) appear progressively rather than batched.
 */
export function split_statements(input: string): string;
/**
 * Evaluate a single statement and return a JSON array of output items
 * (same shape as `evaluate_all`'s elements). Use together with
 * `split_statements` for progressive output.
 */
export function evaluate_statement(stmt: string): string;
/**
 * Evaluate a Manipulate body with a specific set of variable bindings
 * and return a single JSON output item representing the result.
 *
 * `body` must be the body expression in InputForm (as produced by
 * `evaluate_all`'s manipulate item). `bindings_json` must be a JSON
 * object mapping variable names to InputForm-serialized values, e.g.
 * `{"a": "1.5", "b": "\"foo\""}`.
 *
 * The result is a JSON object of the same shape as `initial` from
 * the evaluate_all manipulate item: `{"svg": "...", "text": "..."}`.
 */
export function evaluate_manipulate(body: string, bindings_json: string): string;
/**
 * Evaluate each Manipulate control's `Enabled` condition against a binding
 * set and return a JSON array of booleans (one per control, in order).
 *
 * `conditions_json` is a JSON string array aligned with the control list;
 * an empty string marks a control with no condition (always enabled).
 * `bindings_json` is the same JSON object of variable bindings used by
 * `evaluate_manipulate`. Used by the Playground to grey out controls that a
 * `Enabled -> Dynamic[…]` option has switched off for the current state.
 */
export function evaluate_manipulate_enabled(conditions_json: string, bindings_json: string): string;
/**
 * Render a Manipulate body, its extra display elements, and any pending
 * interactive write-backs in one call. Used by widgets that have display
 * elements (e.g. a `Checkbox` grid) that both read and rewrite shared
 * state.
 *
 * `displays_json` and `mutations_json` are JSON string arrays. Each
 * mutation is an assignment (e.g. `data[[3, 5]] = 1`) applied before the
 * re-render; the updated value of every mutated variable is returned under
 * `state` so the frontend can keep its binding set in sync.
 *
 * The result is `{"output":{svg|text|textSvg}, "displays":[<tree>…],
 * "state":{name:value,…}}`.
 */
export function evaluate_manipulate_full(body: string, displays_json: string, bindings_json: string, mutations_json: string): string;
/**
 * Evaluate, returning only the final expression result (no Print output).
 */
export function evaluate_expr(input: string): string;
export function init(): void;
/**
 * Evaluate a Wolfram Language expression and return the result.
 * If the expression produces Print output, it is prepended to the result.
 */
export function evaluate(input: string): string;
/**
 * Return the captured SVG graphics from the last `evaluate()` call, if any.
 * Returns an empty string when there is no graphics output.
 */
export function get_graphics(): string;
/**
 * Return the playable audio (base64-encoded) from the last `evaluate()`
 * call, if any. Returns an empty string when there is no sound.
 */
export function get_sound(): string;
/**
 * Return warnings from the last `evaluate()` call as newline-separated text.
 * Returns an empty string when there are no warnings.
 */
export function get_warnings(): string;
/**
 * Clear all interpreter state (variables and function definitions).
 */
export function clear(): void;
/**
 * Enable or disable dark mode for SVG output colors.
 */
export function set_dark_mode(enabled: boolean): void;
/**
 * Evaluate all top-level statements and return a JSON array of output items.
 * Each item has a "type" field ("text", "graphics", "print", "warning", "error",
 * "manipulate") and corresponding content fields.
 */
export function evaluate_all(input: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly clear_virtual_files: () => void;
  readonly evaluate: (a: number, b: number) => [number, number];
  readonly evaluate_all: (a: number, b: number) => [number, number];
  readonly evaluate_expr: (a: number, b: number) => [number, number];
  readonly evaluate_manipulate: (a: number, b: number, c: number, d: number) => [number, number];
  readonly evaluate_manipulate_enabled: (a: number, b: number, c: number, d: number) => [number, number];
  readonly evaluate_manipulate_full: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => [number, number];
  readonly evaluate_statement: (a: number, b: number) => [number, number];
  readonly get_graphics: () => [number, number];
  readonly get_sound: () => [number, number];
  readonly get_warnings: () => [number, number];
  readonly set_dark_mode: (a: number) => void;
  readonly set_virtual_file: (a: number, b: number, c: number, d: number) => void;
  readonly split_statements: (a: number, b: number) => [number, number];
  readonly take_exported_files: () => [number, number];
  readonly clear: () => void;
  readonly init: () => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_externrefs: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
