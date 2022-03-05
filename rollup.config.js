import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

export default {
  input: "./index.tsx", // entry 파일 지정
  output: [
    {
      dir: "build", // build 폴더 명
      format: "esm", // build format: cjs 로도 가능
      exports: "named", // Name for UMD export
      sourcemap: true, // sourcemap generate 여부
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(), // peerDependency 로 설치된 라이브러리의 코드가 번들링된 결과에 포함되지 않고 import 구문으로 불러와서 사용할 수 있게 만들어주는 플러그인
    image(),
    resolve(), // node_modules 에서 third party 모듈을 사용하기 위해,  js 이외의 확장자 (ts, tsx) 파일을 불러오기 위해서도 사용
    commonjs({
      include: /node_modules/,
    }), // 외부 노드 모듈이 es6로 변환되지 않았을 경우 es6로 변환하는 플러그인
    typescript({ useTsconfigDeclarationDir: true }), // typescript 관련 플러그인
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }), // css, scss 관련 플러그인
  ],
};
