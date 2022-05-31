fn gcd(mut a: u64, mut b: u64) -> u64 {
    while b != 0 { 
        let temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}

fn lcm(a: u64, b: u64) -> u64 {
    let divisor: u64 = gcd(a, b);
    let res: u64 = (a * b) / divisor;
    return res;
}

fn main() {
    const NUM: u64 = 20;
    let mut find_multiples: [u64; NUM as usize] = [0; NUM as usize];
    for i in 0..NUM {
        find_multiples[i as usize] = i + 1;
    }
    let mut res: u64 = 1;
    for element in find_multiples {
        res = lcm(res, element);
    }

    println!("{}", res);
}
