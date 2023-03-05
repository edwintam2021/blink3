 * Custom blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace animations {
    /**
     * Blink an LED at a particular interval
     * @param x horizontal led coordinate 
     * @param y vertical led coordinate
     * @param interval 
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
