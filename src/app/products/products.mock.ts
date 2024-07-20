export const productsList: Product[] = [
    { id: 1, name: 'Suavitel', price: 4, description: 'Botella de 1 litro'},
    { id: 2, name: 'Detergete', price: 10, description: 'Dura 120 de lavados'},
    { id: 3, name: 'Limpia Vidrios', price: 3, description: 'Deja los vidrios impecables'},
    { id: 4, name: 'Jabon Rey', price: 7, description: 'Cocina tranquilo, nosotros limpiamos'},
    { id: 5, name: 'Quita grasa', price: 8, description: 'Botella de 1 litro'}
]

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}