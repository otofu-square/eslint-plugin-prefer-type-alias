import { preferTypeAlias } from "../prefer-type-alias";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser"
});

const expectedErrors = [
  { message: "Use a type alias instead of an interface." }
];

// @ts-ignore
ruleTester.run("prefer-type-alias", preferTypeAlias, {
  valid: [
    "type A = { a: string }",
    "type A = { a: string } & { b: number }",
    "type A = { a: string } & B & C"
  ],
  invalid: [
    {
      code: "interface A { a: string; }",
      output: "type A = { a: string; }",
      errors: expectedErrors
    },
    {
      code: "interface A extends B { a: string; }",
      output: "type A = { a: string; } & B",
      errors: expectedErrors
    },
    {
      code: `
export interface W<T> {
    x: T,
};
`,
      output: `
export type W<T> = {
    x: T,
};
`,
      errors: expectedErrors
    }
  ]
});
