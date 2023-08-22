import * as React from 'react';
import {
	FlexAlignType,
	GestureResponderEvent,
	StyleProp,
	TextStyle,
	View,
	Text,
	ViewStyle,
} from 'react-native';

import { withInternalTheme } from '../../core/theming';
import { vis } from '../../index';
import type {
	$RemoveChildren,
	EllipsizeProp,
	InternalTheme,
} from '../../types';
import TouchableRipple from '../TouchableRipple/TouchableRipple';

interface Style {
	marginLeft?: number;
	marginRight?: number;
	marginVertical?: number;
	alignSelf?: FlexAlignType;
}

export type Props = $RemoveChildren<typeof TouchableRipple> & {
	amount: string;
	date: Array<string>;
	time: Array<string>;
	dateStyle?: StyleProp<TextStyle>;
	timeStyle?: StyleProp<TextStyle>;
	onPress?: (e: GestureResponderEvent) => void;
	right?: (props: { color: string; style?: Style }) => React.ReactNode;
	direction?: any;
	balance?: any;
	description?: any;
	theme: InternalTheme;
	style?: StyleProp<ViewStyle>;
	balanceStyle?: StyleProp<ViewStyle>;
	amountStyle?: StyleProp<TextStyle>;
	descriptionStyle?: StyleProp<TextStyle>;
	amountNumberOfLines?: number;
	descriptionNumberOfLines?: number;
	amountEllipsizeMode?: EllipsizeProp;
	descriptionEllipsizeMode?: EllipsizeProp;
};

const ListLastTransaction = ({
	date,
	time,
	direction,
	right,
	amount,
	balance,
	description,
	onPress,
	theme,
	style,
	amountNumberOfLines = 1,
	descriptionNumberOfLines = 2,
	amountEllipsizeMode,
	descriptionEllipsizeMode,
	descriptionStyle,
	amountStyle,
	balanceStyle,
	dateStyle,
	timeStyle,
	...rest
}: Props) => {
	return (
		<TouchableRipple
			{...rest}
			style={[vis.w100, vis.rowRl, vis.fc, vis.ac, vis.mb5]}
			onPress={onPress}
		>
			<View
				style={[
					vis.w75,
					vis.col,
					vis.sb,
					vis.ac,
					{ borderBottomWidth: 0.2, borderBottomColor: 'gray' },
				]}
			>
				<View
					style={[
						vis.w75,
						vis.rowRl,
						vis.sb,
						vis.ac,
						{ paddingBottom: 10 },
					]}
				>
					<View
						style={[vis.w30, vis.col, vis.h40p, vis.sb, vis.asRl]}
					>
						<Text style={amountStyle}>{amount}</Text>
						<Text style={balanceStyle}>{balance}</Text>
					</View>
					<View
						style={[vis.w20, vis.col, vis.h40p, vis.sb, vis.aeRl]}
					>
						<Text style={timeStyle}>{time}</Text>
						<Text style={dateStyle}>{date}</Text>
					</View>
				</View>
				<View
					style={[
						vis.w75,
						vis.col,
						vis.feRl,
						vis.ac,
						{ paddingBottom: 10 },
					]}
				>
					<Text style={descriptionStyle}>{description}</Text>
				</View>
			</View>
		</TouchableRipple>
	);
};

ListLastTransaction.displayName = 'List.LastTransaction';
export default withInternalTheme(ListLastTransaction);
