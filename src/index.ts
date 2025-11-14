import products from "./products.json";

class ListaDeCosas {
  name: string;
  cosas: any[] = [];
  constructor(name: string) {
    // nombre de esta lista
    this.name = name;
  }
  add(nuevaCosa) {
    this.cosas.push(nuevaCosa);
  }
  getCosas() {
    return this.cosas;
  }
}

class Product {
  name: string;
  price: number;
  id: number;
  constructor(name: string, price: number, id: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
}

class ListaDeProductos extends ListaDeCosas {
  constructor(n: string) {
    // Llamada al constructor de la superclase: LisaDeCosas
    super(n);

    // Lógica adicional para leer products.json y agregar productos usando addProduct
    // ...
    products.forEach((product) => {
      this.addProduct(product);
    })

    // Ejemplo de cómo se puede invocar addProduct para agregar un producto
    // this.addProduct(new Product(/* parámetros del producto */));
  }

  addProduct(product: Product): void {
    const existe = this.cosas.find(producto => producto.id === product.id);
    if(!existe){
      this.cosas.push(product)
    }
  }

  getProduct(id: number): Product {
    const result = this.cosas.find(producto => producto.id === id);
    return result
  }

  removeProduct(id: number): void {
    this.cosas = this.cosas.filter(producto => producto.id !== id)
  }

  getSortedByPrice(order: string): Product[] {
  switch(order) {
    case "asc":
      return this.cosas.sort((a, b) => a.price - b.price); // Orden ascendente
    case "desc":
      return this.cosas.sort((a, b) => b.price - a.price); // Orden descendente
    default:
      return this.cosas; // Si no es "asc" ni "desc", devuelve el array sin cambios
  }
}

}


export { ListaDeProductos, Product };
