export const preferTypeAlias = {
  meta: {
    docs: {
      description: "",
      category: "Possible Errors",
      recommended: true,
      url: ""
    },
    schema: []
  },

  create: (context: any) => ({
    TSInterfaceDeclaration: (node: any) => {
      if (!node.extends) {
        context.report({ node, message: "Prefer type alias." });
      }
    }
  })
};
