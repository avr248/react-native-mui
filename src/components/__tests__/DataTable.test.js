import * as React from 'react';
import { render } from '@testing-library/react-native';
import DataTable from '../DataTable/DataTable';
it('renders data table header', () => {
    const tree = render(React.createElement(DataTable.Header, null,
        React.createElement(DataTable.Title, null, "Dessert"),
        React.createElement(DataTable.Title, null, "Calories"))).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders data table title with sort icon', () => {
    const tree = render(React.createElement(DataTable.Title, { sortDirection: "descending" }, "Dessert")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders right aligned data table title', () => {
    const tree = render(React.createElement(DataTable.Title, { numeric: true }, "Calories")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders data table title with press handler', () => {
    const tree = render(React.createElement(DataTable.Title, { sortDirection: "descending", onPress: () => { } }, "Dessert")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders data table cell', () => {
    const tree = render(React.createElement(DataTable.Cell, null, "Cupcake")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders right aligned data table cell', () => {
    const tree = render(React.createElement(DataTable.Cell, { numeric: true }, "356")).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders data table pagination', () => {
    const tree = render(React.createElement(DataTable.Pagination, { page: 3, numberOfPages: 15, onPageChange: () => { } })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders data table pagination with label', () => {
    const tree = render(React.createElement(DataTable.Pagination, { page: 3, numberOfPages: 15, onPageChange: () => { }, label: "11-20 of 150" })).toJSON();
    expect(tree).toMatchSnapshot();
});
it('renders data table pagination with fast-forward buttons', () => {
    const { getByLabelText, toJSON } = render(React.createElement(DataTable.Pagination, { page: 3, numberOfPages: 15, onPageChange: () => { }, label: "11-20 of 150", showFastPaginationControls: true }));
    expect(getByLabelText('page-first')).toBeTruthy();
    expect(getByLabelText('page-last')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
});
it('renders data table pagination without options select', () => {
    const { queryByLabelText } = render(React.createElement(DataTable.Pagination, { page: 3, numberOfPages: 15, onPageChange: () => { }, label: "11-20 of 150", showFastPaginationControls: true }));
    expect(queryByLabelText('Options Select')).toBeFalsy();
});
it('renders data table pagination with options select', () => {
    const { getByLabelText, toJSON } = render(React.createElement(DataTable.Pagination, { page: 3, numberOfPages: 15, onPageChange: () => { }, label: "11-20 of 150", showFastPaginationControls: true, numberOfItemsPerPageList: [2, 4, 6], numberOfItemsPerPage: 2, onItemsPerPageChange: () => { }, selectPageDropdownLabel: 'Rows per page' }));
    expect(getByLabelText('Options Select')).toBeTruthy();
    expect(getByLabelText('selectPageDropdownLabel')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
});
