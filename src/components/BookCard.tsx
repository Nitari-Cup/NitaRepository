type Book = {
    image: string;
    title: string;
    description: string;
    macLink: string;
};

function BookCard({ data }: { data: Book[] }) { 
    return (
        <div className="grid grid-cols-3 gap-4">
            {data.map((book: Book, index: number) => (
                <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={book.image} alt={book.title} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{book.title}</h2>
                        <p>{book.description}</p>
                        <div className="card-actions justify-end">
                            <a href={book.macLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Buy Now</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookCard;
