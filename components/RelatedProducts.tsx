const related = [
    "shoe1.png",
    "shoe2.png",
    "shoe3.png",
    "shoe4.png",
    "shoe5.png",
  ];
  
  export function RelatedProducts() {
    return (
      <div>
        <h2 className="text-lg font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map((img, i) => (
            <img
              key={i}
              src={`/assets/${img}`}
              alt={`Related product ${i + 1}`}
              className="rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    );
  }