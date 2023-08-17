import * as React from 'react';
import { StyleSheet } from 'react-native';
import color from 'color';
import { useInternalTheme } from '../../core/theming';
import Text from '../Typography/Text';
/**
 * A component used to display a header in lists.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => <List.Subheader>My List Title</List.Subheader>;
 *
 * export default MyComponent;
 * ```
 */
const ListSubheader = _ref => {
  let {
    style,
    theme: overrideTheme,
    ...rest
  } = _ref;
  const theme = useInternalTheme(overrideTheme);
  const textColor = theme.isV3 ? theme.colors.onSurfaceVariant : color(theme.colors.text).alpha(0.54).rgb().string();
  const font = theme.isV3 ? theme.fonts.bodyMedium : theme.fonts.medium;
  return /*#__PURE__*/React.createElement(Text, {
    variant: "bodyMedium",
    numberOfLines: 1,
    ...rest,
    style: [styles.container, {
      color: textColor,
      ...font
    }, style]
  });
};
ListSubheader.displayName = 'List.Subheader';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 13
  }
});
export default ListSubheader;
//# sourceMappingURL=ListSubheader.js.mapumberOfLines: 1
  }, rest, {
    style: [styles.container, {
      color: textColor,
      ...font
    }, style]
  }));
};
ListSubheader.displayName = 'List.Subheader';
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 13
  }
});
export default ListSubheader;
//# sourceMappingURL=ListSubheader.js.map