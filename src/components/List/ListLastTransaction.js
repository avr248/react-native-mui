import * as React from 'react';
import { View, Text, } from 'react-native';
import { withInternalTheme } from '../../core/theming';
import vis from '../../styles/vis';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
const ListLastTransaction = ({ date, time, direction, right, amount, balance, balanceTitle, description, onPress, theme, style, amountNumberOfLines = 1, descriptionNumberOfLines = 2, amountEllipsizeMode, descriptionEllipsizeMode, descriptionStyle, amountStyle, balanceStyle, dateStyle, timeStyle, ...rest }) => {
    return (React.createElement(TouchableRipple, { ...rest, style: [vis.w100, vis.rowRl, vis.fc, vis.ac, vis.mb5], onPress: onPress },
        React.createElement(View, { style: [
                vis.w90,
                vis.col,
                vis.sb,
                vis.ac,
                { borderBottomWidth: 0.2, borderBottomColor: 'gray' },
            ] },
            React.createElement(View, { style: [vis.w90, vis.rowRl, vis.sb, vis.ac] },
                React.createElement(View, { style: [vis.w30, vis.col, vis.sb, vis.asRl] },
                    React.createElement(Text, { style: timeStyle }, balance),
                    React.createElement(Text, { style: balanceStyle }, balanceTitle)),
                React.createElement(View, { style: [vis.w20, vis.col, vis.sb, vis.aeRl] },
                    React.createElement(Text, { style: timeStyle }, time),
                    React.createElement(Text, { style: dateStyle }, date))),
            React.createElement(View, { style: [vis.w75, vis.col, vis.feRl, vis.ac, vis.pb2] },
                React.createElement(Text, { style: [amountStyle, vis.fos4, vis.mb1] }, amount),
                React.createElement(Text, { style: descriptionStyle }, description)))));
};
ListLastTransaction.displayName = 'List.LastTransaction';
export default withInternalTheme(ListLastTransaction);
