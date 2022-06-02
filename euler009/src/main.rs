fn n_calc(num: i32, m: i32) -> f64 {
    (num as f64 / 2.0f64 / m as f64) - m as f64
}

fn main() {
    let num = 1000;

    let mut m: i32 = 0;
    let mut n: f64 = n_calc(num, m);

    let mut is_found: bool = false;

    while !is_found && m < num {
        m += 1;
        n = n_calc(num, m);
        if m > n as i32 && n as i32 > 0 && n == (n as i32) as f64 {
            is_found = true;
        }
    }
    if n != (n as i32) as f64 || 0 > n as i32  {
        println!("Nothing matches!");
    } else {
        let c = m * m + n as i32 * n as i32;
        let b = m * m - n as i32 * n as i32;
        let a = 2 * m * n as i32;
        println!("{}, {}, {}: Product: {}", a, b, c, a * b * c);
    }
}
