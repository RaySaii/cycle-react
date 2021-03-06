import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.tsx',
  output: [{
    name: 'CycleReact',
    file: 'lib/index.js',
    format: 'cjs',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'xstream': 'xs'
    },
  }],
  external: [
    'xstream',
    'react',
    'react-dom'
  ],
  plugins: [
    resolve({
      jsnext: true
    }),
    commonjs(),
    typescript({
      declaration: true
    }),
    uglify()
  ]
};
