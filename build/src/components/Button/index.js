import React from 'react';
import classNames from '../../../node_modules/classnames/index.js';
import styles from './style.module.scss.js';

var ButtonType;
(function (ButtonType) {
    ButtonType["DEFAULT"] = "default";
    ButtonType["PRIMARY"] = "primary";
    ButtonType["SECONDARY"] = "secondary";
})(ButtonType || (ButtonType = {}));
var Button = function (_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? ButtonType.DEFAULT : _b;
    var classNameProps = classNames(styles.default, styles[theme]);
    return React.createElement("button", { className: classNameProps }, children);
};

export { ButtonType, Button as default };
//# sourceMappingURL=index.js.map
