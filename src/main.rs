use warp::Filter;

#[tokio::main]
async fn main() {
    // простой hello world сервер
    let hello = warp::path!("hello" / String)
        .map(|name| format!("Hello, {}! This is Zama dApp backend.", name));

    println!("🚀 Server running on http://127.0.0.1:3030");
    warp::serve(hello).run(([127, 0, 0, 1], 3030)).await;
}
