use std::f64;

fn main() {
    let mut number: u64 = 600851475143;
    let mut last_factor: u64 = 1;
    let mut factor: u64 = 3;
    while number % 2 == 0 {
        number = number / 2;
        last_factor = 2;
    }
    let mut max_factor: u64 = (number as f64).sqrt() as u64 + 1;
    while number > 0 && factor < max_factor {
        if number % factor == 0 {
            number = number / factor;
            last_factor = factor;
            while number % factor == 0 {
                number = number / factor
            }
            max_factor = (number as f64).sqrt() as u64 + 1;
        }
        factor += 2
    }
    println!("The answer is {}", if number == 1 { last_factor } else { number })
}
