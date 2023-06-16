export async function getPromotedProducts() {
    const res = await fetch(`http://localhost:8080/promotedProducts`);
    return res.json()
}
export async function getNewProducts(creationDate: string) {
  const res = await fetch(`http://localhost:8080/products?creationDate=${creationDate}&_page=1&_limit=14`);
  return res.json()
}
export async function getBestSelling() {
  const res = await fetch(`http://localhost:8080/products?_page=2&_limit=10&sort=price&_order=asc`);
  return res.json()
}
export async function getMostViewed() {
  const res = await fetch(`http://localhost:8080/products?_page=2&_limit=14&sort=totalViews&_order=desc`);
  return res.json()
}
   