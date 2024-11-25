import React from 'react';
declare function DateRangePicker({ startDate, endDate, omitYear, omitMonth, omitDay, allowPast, maxYearsToPast, maxYearsToFuture, preventWrongTiming, wrongTimeWarning, warnEqualTime, onChangeStartDate, onChangeEndDate, }: {
    startDate?: Date;
    endDate?: Date;
    omitYear?: boolean;
    omitMonth?: boolean;
    omitDay?: boolean;
    allowPast?: boolean;
    maxYearsToPast?: number;
    maxYearsToFuture?: number;
    preventWrongTiming?: boolean;
    wrongTimeWarning?: boolean;
    warnEqualTime?: boolean;
    onChangeStartDate: (date: Date) => void;
    onChangeEndDate: (date: Date) => void;
}): React.JSX.Element;
export default DateRangePicker;
