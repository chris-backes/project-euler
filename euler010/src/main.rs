use std::time::Instant;

fn main() {
    let now = Instant::now();
    
    let limit: u64 = 2000000;
    let square_of_limit: u64 = (limit as f64).sqrt() as u64 + 1;

    let mut vec: Vec<u64> = vec![2];
    let mut sum: u64 = 2;
    let mut interval: u64 = 3;
    let mut is_prime: bool = false;

    while interval < limit {
        for nums in vec.iter() {
            if nums >= &square_of_limit { break; }
            if interval % nums == 0 { is_prime = true; }
        }
        if !is_prime {
            vec.push(interval);
            sum += interval;
        }
        is_prime = false;
        interval += 2;
    }

    let elapsed = now.elapsed();

    println!("{} \n {:.4?}", sum, elapsed);
}
