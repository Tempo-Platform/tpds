import React from 'react';
declare function Table({ columns, data, pagination, rowsPerPage, page, router, rowClick, density, // 'low', 'medium', 'high'
rowSpacing, // 'none', 'low', 'medium', 'high'
customRowClass, customHeaderClass, }: {
    columns: any[];
    data: any[];
    pagination?: boolean;
    rowsPerPage?: number;
    page?: number;
    router?: any;
    rowClick?: any;
    density?: 'low' | 'medium' | 'high';
    rowSpacing?: 'none' | 'low' | 'medium' | 'high';
    customRowClass?: string;
    customHeaderClass?: string;
}): React.JSX.Element;
export default Table;
