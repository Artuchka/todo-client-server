"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strictEnumRule = void 0;
const utils_1 = require("@typescript-eslint/utils");
exports.strictEnumRule = utils_1.ESLintUtils.RuleCreator.withoutDocs({
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
                    });
                }
                if (node.id.name[0]?.toUpperCase() !== node.id.name[0]) {
                    context.report({
                        node,
                        messageId: "capitalizeEnumNames",
                    });
                }
            },
            TSEnumMember(node) {
                if (node.initializer?.type !== utils_1.AST_NODE_TYPES.Literal) {
                    return context.report({
                        node,
                        messageId: "literalMembers",
                    });
                }
                if (typeof node.initializer.value !== "string") {
                    return context.report({
                        node,
                        messageId: "noNonStringMembers",
                    });
                }
                if (node.id.name?.toUpperCase() !== node.id?.name) {
                    return context.report({
                        node,
                        messageId: "upperCaseEnumKeys",
                    });
                }
                if (node.initializer.value.toString().toUpperCase() !== node.initializer.value.toString()) {
                    return context.report({
                        node,
                        messageId: "upperCaseEnumValues",
                    });
                }
            },
        };
    },
});
