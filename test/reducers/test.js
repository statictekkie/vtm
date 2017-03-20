import { List, Map, Set } from 'immutable';
import { expect } from 'chai';
import moment from 'moment';

import * as ArchiveUtil from '../../src/reducers/archive-util';

describe('ArchiveUtil', () => {

    const expectedHourly = List([
        moment('2005-12-31 23:55:00'),
        moment('2005-12-31 22:55:00'),
        moment('2005-12-31 21:55:00'),
        moment('2005-12-31 20:55:00'),
        moment('2005-12-31 19:55:00')
    ]);

    const expectedDaily = List([
        moment('2005-12-31 23:55:00'),
        moment('2005-12-30 23:55:00'),
        moment('2005-12-29 23:55:00'),
        moment('2005-12-28 23:55:00'),
        moment('2005-12-27 23:55:00')
    ]);

    const expectedWeekly = List([
        moment('2005-12-31 23:55:00'),
        moment('2005-12-24 23:55:00'),
        moment('2005-12-17 23:55:00'),
        moment('2005-12-10 23:55:00'),
        moment('2005-12-03 23:55:00')
    ]);

    const expectedMonthly = List([
        moment('2005-12-31 23:55:00'),
        moment('2005-11-30 23:55:00'),
        moment('2005-10-31 23:55:00'),
        moment('2005-09-30 23:55:00'),
        moment('2005-08-31 23:55:00')
    ]);

    const expectedYearly = List([
        moment('2005-12-31 23:55:00'),
        moment('2004-12-31 23:55:00'),
        moment('2003-12-31 23:55:00'),
        moment('2002-12-31 23:55:00'),
        moment('2001-12-31 23:55:00')
    ]);

    function generateTestDates(cal, until, increment, unit) {

        let testDates = List([]);

        while (cal.isBefore(until)) {
            testDates = testDates.push(moment(cal));
            cal.add(increment, unit);
        }

        return testDates;
    }

    function generateRecoveryPoints(startTime, endTime, startingId, increment, field) {

        let availableRecoveryPoints = List([]), rpId = startingId;
        const cal = moment(startTime);

        while( (increment > 0 && cal.isBefore(endTime)) || (increment < 0 && cal.isAfter(endTime)) ) {

            availableRecoveryPoints = availableRecoveryPoints.push({ id: rpId, createdOnTimestamp: moment(cal), archived: false, merged: false });
            rpId++;

            cal.add(increment, field);

            if( field === 'M' ) {
                cal.endOf('month').hour(23).minutes(55).seconds(0).milliseconds(0);
            }

        }

        return availableRecoveryPoints;
    }

    let cal, testDates = List([]);

    before(() => {
        testDates = generateTestDates(moment('2000-01-01 00:00:00'), moment('2005-12-31 23:59:00'), 5, 'm');
    });

    describe('getHourlyArchivePoints', () => {

        it('Should return the expected hourly archive points', () => {
            expect(ArchiveUtil.getHourlyArchivePoints(cal, 5, testDates)).to.equal(expectedHourly);
        });

        it('Should not archive recovery points in an incomplete bucket', () => {
            const currentTime = moment('2006-01-01 00:35:00');
            const dates = generateTestDates(moment('2005-12-30 00:00:00'), moment('2006-01-01 00:30:00'), 5, 'm');
            expect(ArchiveUtil.getHourlyArchivePoints(currentTime, 5, dates)).to.equal(expectedHourly);
        });

    });

    describe('getDailyArchivePoints', () => {

        it('Should return the expected daily archive points', () => {
            expect(ArchiveUtil.getDailyArchivePoints(cal, 5, testDates)).to.equal(expectedDaily);
        });

        it('Should not archive recovery points in an incomplete bucket', () => {
            const currentTime = moment('2006-01-01 12:00:00');
            const dates = testDates.concat(generateTestDates(moment('2006-01-01 00:00:00'), moment('2006-01-01 12:00:00'), 5, 'm'));
            expect(ArchiveUtil.getDailyArchivePoints(currentTime, 5, dates)).to.equal(expectedDaily);
        });

    });

    describe('getWeeklyArchivePoints', () => {

        it('Should return the expected weekly archive points', () => {
            expect(ArchiveUtil.getWeeklyArchivePoints(cal, 5, testDates)).to.equal(expectedWeekly);
        });

        it('Should not archive recovery points in an incomplete bucket', () => {
            const currentTime = moment('2006-01-06 12:35:00');
            const dates = testDates.concat(generateTestDates(moment('2006-01-01 00:00:00'), moment('2006-01-06 12:00:00'), 5, 'm'));
            expect(ArchiveUtil.getWeeklyArchivePoints(currentTime, 5, dates)).to.equal(expectedWeekly);
        });

    });

    describe('getMonthlyArchivePoints', () => {

        it('Should return the expected monthly archive points', () => {
            expect(ArchiveUtil.getMonthlyArchivePoints(cal, 5, testDates)).to.equal(expectedMonthly);
        });

        it('Should not archive recovery points in an incomplete bucket', () => {
            const currentTime = moment('2006-01-06 12:35:00');
            const dates = testDates.concat(generateTestDates(moment('2006-01-01 00:00:00'), moment('2006-01-30 12:00:00'), 5, 'm'));
            expect(ArchiveUtil.getMonthlyArchivePoints(currentTime, 5, dates)).to.equal(expectedMonthly);
        });

    });

    describe('getYearlyArchivePoints', () => {

        it('Should return the expected yearly archive points', () => {
            expect(ArchiveUtil.getYearlyArchivePoints(cal, 5, testDates)).to.equal(expectedYearly);
        });

        it('Should not archive recovery points in an incomplete bucket', () => {
            const currentTime = moment('2006-02-15 12:35');
            const dates = testDates.concat(generateTestDates(moment('2006-01-01 00:00:00'), moment('2006-02-15 12:00:00'), 5, 'm'));
            expect(ArchiveUtil.getYearlyArchivePoints(currentTime, 5, dates)).to.equal(expectedYearly);
        });

    });

    describe('getArchivedRecoveryPoints', () => {

        it('Should select the correct recovery points for archiving', () => {

            let availableRecoveryPoints = List([]);
            let rpId = 1;

            const minutelyPoints = generateRecoveryPoints(moment("2005-12-31 23:55:00"), moment("2005-12-31 00:00:00"), rpId, -5, 'm');
            availableRecoveryPoints = availableRecoveryPoints.concat(minutelyPoints);
            rpId += minutelyPoints.size;

            const hourlyPoints = generateRecoveryPoints(moment("2005-12-30 23:55:00"), moment("2005-12-01 00:00:00"), rpId, -1, 'H');
            availableRecoveryPoints = availableRecoveryPoints.concat(hourlyPoints);
            rpId += hourlyPoints.size;

            const dailyPoints = generateRecoveryPoints(moment("2005-11-30 23:55:00"), moment("2005-01-01 00:00:00"), rpId, -1, 'd');
            availableRecoveryPoints = availableRecoveryPoints.concat(dailyPoints);
            rpId += dailyPoints.size;

            const monthlyPoints = generateRecoveryPoints(moment("2004-12-31 23:55:00"), moment("2000-01-01 00:00:00"), rpId, -1, 'M');
            availableRecoveryPoints = availableRecoveryPoints.concat(monthlyPoints);

            const currentTime = moment("2006-01-01 00:00:00");

            let combinedExpected = Set([]);
            combinedExpected = combinedExpected.concat(expectedHourly);
            combinedExpected = combinedExpected.concat(expectedDaily);
            combinedExpected = combinedExpected.concat(expectedWeekly);
            combinedExpected = combinedExpected.concat(expectedMonthly);
            combinedExpected = combinedExpected.concat(expectedYearly);

            let combinedFound = Set([]);

            ArchiveUtil.getArchivedRecoveryPoints(availableRecoveryPoints, 5, 5, 5, 5, 5, currentTime).forEach((recoveryPoint) => {
                combinedFound = combinedFound.add(recoveryPoint.createdOnTimestamp);
            });

            expect(combinedFound.sort()).to.equal(combinedExpected.sort());
        });

    });

});
