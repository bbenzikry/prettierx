// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/..`;

run_spec(dirpath, ["babel", "babel-flow", "flow", "typescript"], {
  alignTernaryLines: true,
  parenSpacing: true,
  // [prettierx] recommended option:
  arrowParens: "avoid",
  // [prettierx] "Standard JS" setting:
  trailingComma: "none",
});
