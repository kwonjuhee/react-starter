module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-recess-order"],
  rules: {
    "declaration-block-no-duplicate-properties": true,
    "length-zero-no-unit": [
      true,
      {
        ignore: ["custom-properties"],
      },
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless"],
      },
    ],
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "selector-max-type": [0, { ignore: "child" }],
    "font-weight-notation": "numeric",
    "import-notation": "string",
    "selector-pseudo-element-colon-notation": "double",
    "declaration-block-no-redundant-longhand-properties": true,
    "shorthand-property-no-redundant-values": true,
  },
};
