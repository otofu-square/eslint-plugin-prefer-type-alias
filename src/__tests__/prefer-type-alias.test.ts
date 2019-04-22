import { preferTypeAlias } from "../prefer-type-alias";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser"
});

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
      errors: [
        {
          message: "Prefer type alias."
        }
      ]
    },
    {
      code: "interface A extends B { a: string; }",
      errors: [
        {
          message: "Prefer type alias."
        }
      ]
    }
  ]
});
