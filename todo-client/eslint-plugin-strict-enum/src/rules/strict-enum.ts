import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils"

export const strictEnumRule = ESLintUtils.RuleCreator.withoutDocs({
  meta: {
    type: "problem",
    messages: {
      noConstEnum: "don't use const enums",

      literalMembers: "don't use non literal value in enum",
      noNonStringMembers: "don't use non string values in enum",

      upperCaseEnumKeys: "use only UPPERCASE keys in enum",
      upperCaseEnumValues: "use only UPPERCASE values in enum",

      capitalizeEnumNames: "Capitalize enum names",
    },
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      TSEnumDeclaration(node) {
        if (node.const) {
          context.report({
            node,
            messageId: "noConstEnum",
          })
        }
        if (node.id.name[0]?.toUpperCase() !== node.id.name[0]) {
          context.report({
            node,
            messageId: "capitalizeEnumNames",
          })
        }
      },
      TSEnumMember(node) {
        if (node.initializer?.type !== AST_NODE_TYPES.Literal) {
          return context.report({
            node,
            messageId: "literalMembers",
          })
        }

        if (typeof node.initializer.value !== "string") {
          return context.report({
            node,
            messageId: "noNonStringMembers",
          })
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (node.id.name?.toUpperCase() !== node.id?.name) {
          return context.report({
            node,
            messageId: "upperCaseEnumKeys",
          })
        }

        if (node.initializer.value.toString().toUpperCase() !== node.initializer.value.toString()) {
          return context.report({
            node,
            messageId: "upperCaseEnumValues",
          })
        }
      },
    }
  },
})
