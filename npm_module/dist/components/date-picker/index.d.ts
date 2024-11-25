import React from 'react';
declare function DatePicker({ year, month, day, omitYear, omitMonth, omitDay, allowPast, omitBorders, omitCalendarIcon, maxYearsToPast, maxYearsToFuture, className, styleOverrides, onChange, }: {
    year?: number;
    month?: number;
    day?: number;
    onChange: (date: Date) => void;
    omitYear?: boolean;
    omitMonth?: boolean;
    omitDay?: boolean;
    allowPast?: boolean;
    omitBorders?: boolean;
    omitCalendarIcon?: boolean;
    maxYearsToPast?: number;
    maxYearsToFuture?: number;
    className?: string;
    styleOverrides?: React.CSSProperties;
}): React.JSX.Element;
export default DatePicker;
