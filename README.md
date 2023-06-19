get list => get all | get with pagination
get detail

next =>
người dùng đăng kí => đăng nhập => xem sản phẩm => chọn vào giỏ => xem giỏ => mua hàng => thanh toán.

customer => không SEO
product => SEO
cart => Không SEO
order => Không SEO

Không SEO => Client side render => useEffect

getStaticProps => server side render
getStaticPaths => server side render

getServerSideProps => server side render

useEffect => client side render

SSR (server side render)                CSR (client side render)
SSR - SSG                                => useEffect => render mỗi lần request nhưng ở phía client 
SSR => getServerSideProps => render mỗi lần request nhưng ở phía server 
SSG => server side generation => getStaticProps => render lần khi build | lần đầu người dùng truy cập | revalidate
    => getStaticPath => render lần đầu build


SEO được=> getServerSideProps | getStaticProps

Get Detail                get ME (thông tin của tôi)
ID                         ID
Quyền truy cập dữ liệu     Quyền của người dùng

FE
Get detail => id         get my profile (token)
