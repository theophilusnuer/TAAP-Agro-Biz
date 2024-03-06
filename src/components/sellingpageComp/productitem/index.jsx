
export default function ProductItem ({index,  item,description,file,quantity,price,contact}) {
    return (
        <span key={index}>{item} {description} {file} {quantity} {price} </span>
    );
}