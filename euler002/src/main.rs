fn main() {
    let mut sum = 0;
    // let mut a: u32 = 1;
    let mut b: u32 = 1;
    let mut c: u32 = 2;
    let lim: u32 = 4000000;

    while c < lim {
        sum += c;
        let a = c + b;
        b = a + c;
        c = a + b;
    }

    println!("The answer is {}", sum); 
}
