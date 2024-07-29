import { ToString, isEqual } from "~/utils"

export namespace Clamp {
    type Decompose<S> = S extends `${infer FirstNumber}|${infer RestOfSet}` ? [FirstNumber, RestOfSet] : never;

    type OneHundredArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
    type OneHundredStr = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99";
    type ToNumber<T extends OneHundredStr> = OneHundredArray[T]

    type DecomposedNumber<S> = ToNumber<Extract<Decompose<S>[0], OneHundredStr>>

    type FortyFive = '0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45|end'
    type AllGreaterThan<LessThanThis extends number | string, RangeToReturn extends number, Current = FortyFive> =
        ToString<LessThanThis> extends Decompose<Current>[0]
        ? Exclude<RangeToReturn, DecomposedNumber<Current>>
        : AllGreaterThan<LessThanThis, Exclude<RangeToReturn, DecomposedNumber<Current>>, Decompose<Current>[1]>

    type OneToOneHundredNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99

    type Above<N extends number> = AllGreaterThan<N, OneToOneHundredNumber>
    type Below<N extends number> = Exclude<OneToOneHundredNumber, Above<N> | N>

    type AboveTest<T extends NumberRange, R extends NumberRange, Y = true, N = false> = T extends Above<R> ? Y : N
    type TestInternal<N extends number, R extends Range, A = "above", W = "within", B = "below"> = N extends Above<R["max"]> ? A : N extends Below<R["min"]> ? B : W

    export type NumberRange = Below<45>
    export type BooleanTest<N extends number, R extends Range> = TestInternal<N, R, false, true, false>
    export type Test<N extends number, R extends Range, O extends Outcomes<any, any, any> = { above: "above", within: "within", below: "below" }> = TestInternal<N, R, O["above"], O["within"], O["below"]>
    export function test<N extends NumberRange, R extends Range, O extends Outcomes>(test: N, range: R, outcomes: O): Test<N, R, O> {
        if (isEqual<AboveTest<N, R["max"]>>(true)) return outcomes["above"]
        if (isEqual<AboveTest<N, R["min"]>>(true)) return outcomes["within"]
        return outcomes["below"]
    }
    export const range = <Min extends NumberRange, Max extends NumberRange>(min: Min, max: Max) => ({ min, max }) as Range<Min, Extract<Max, NumberRange>>
    export type Range<Min extends NumberRange = NumberRange, Max extends NumberRange = NumberRange> = {
        min: Min, max: Max
    }
    export const outcomes = <A, W, B>(above: A, within: W, below: B) => ({ above, within, below })
    export type Outcomes<A = any, W = any, B = any> = {
        above: A,
        within: W
        below: B,
    }
}