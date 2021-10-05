import { getHourFromTime, unitConvertKphMs } from './utils'

describe('utils', () => {
    test('unitConvertKphMs converts correctly', () => {
        expect(unitConvertKphMs(100)).toBe("27.78")
    })

    test('unitConvertKphMs accepts 0', () => {
        expect(unitConvertKphMs(0)).toBe("0.00")
    })

    test('unitConvertKphMs rounds decimals correctly', () => {
        expect(unitConvertKphMs(100000)).toBe("27777.78")
    })

    test('getHourFromTime gets correct hour for dawn', () => {
        expect(getHourFromTime('2021-10-02 03:00')).toBe(3)
    })

    test('getHourFromTime gets correct hour for afternoon', () => {
        expect(getHourFromTime('2021-10-02 15:00')).toBe(15)
    })
})