const { build } = require("esbuild");
const esbuildPluginTsc = require("esbuild-plugin-tsc");
const { dependencies, devDependencies, peerDependencies } = require("./package.json");

const settings = {
  entryPoints: ['src/index.tsx'],
  outfile: 'lib/index.js',
  bundle: true,
  sourcemap: false,
  external: [...Object.keys(dependencies), ...Object.keys(devDependencies), ...Object.keys(peerDependencies)],
  plugins: [
    esbuildPluginTsc({
      force: true
    }),
  ],
  minify: false,
  format: "esm"
};

build(settings);