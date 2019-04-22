import { Rule } from "eslint";

export const preferTypeAlias = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prefer a type alias over an interface declaration",
      category: "Stylistic Issues",
      recommended: "error"
    },
    fixable: "code"
  },

  create: (context: Rule.RuleContext) => {
    const sourceCode = context.getSourceCode();

    return {
      TSInterfaceDeclaration: (node: any) => {
        context.report({
          node: node.id,
          message: "Use a type alias instead of an interface.",
          fix: (fixer: Rule.RuleFixer) => {
            const fixes: any = [];

            const interfaceKeyword = sourceCode.getFirstToken(node);
            const extendsKeyword = sourceCode.getTokenAfter(interfaceKeyword!, {
              filter: token =>
                token.type === "Keyword" && token.value === "extends"
            });
            const headBracket = sourceCode.getTokenAfter(interfaceKeyword!, {
              filter: token =>
                token.type === "Punctuator" && token.value === "{"
            });

            fixes.push(fixer.replaceText(interfaceKeyword!, "type"));
            fixes.push(fixer.insertTextBefore(headBracket!, "= "));

            if (extendsKeyword) {
              const interfaceIdentifier = sourceCode.getTokenAfter(
                extendsKeyword,
                {
                  filter: token => token.type === "Identifier"
                }
              );

              const [tailBracket] = sourceCode.getLastTokens(node, {
                filter: token =>
                  token.type === "Punctuator" && token.value === "}"
              });

              // NOTE: insertion `& Keyword` to tail
              fixes.push(fixer.insertTextAfter(tailBracket, " & "));
              fixes.push(
                fixer.insertTextAfter(tailBracket, interfaceIdentifier!.value)
              );

              // NOTE: remove `extends` & interface name
              fixes.push(
                fixer.removeRange([
                  extendsKeyword.range[0],
                  extendsKeyword.range[1] + 1
                ])
              );
              fixes.push(
                fixer.removeRange([
                  interfaceIdentifier!.range[0],
                  interfaceIdentifier!.range[1] + 1 // include space after Identifier like `A `
                ])
              );
            }

            return fixes;
          }
        });
      }
    };
  }
};
