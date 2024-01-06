const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Garlic', isFruit: false, id: 3},
    {title: 'Apple', isFruit: true, id: 3}
];

export default function ShoppingList(){
   
        const listItems = products.map(product => 
            <li
                key={product.id}
                style={{
                    color: product.isFruit? 'magenta' : 'darkgreen'
                }}
            >
                {product.title}
            </li>
        );
     return(listItems);
}