export default function two_crystal_balls(breaks: boolean[]): number {
    // create the jump using square root
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    // use first crystal ball to see where it breaks
    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // if it breaks, walk back sqrt(n)
    i -= jumpAmount;

    // as long as j is less than the jump amount and i is less than breaks.length, loop a lenth of jumpAmount until it breaks
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
