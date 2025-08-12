import Image from "next/image";

export default function ProductCard({ image, name, description, price }) {
  return (
    <div className="border border-teal-200 rounded-lg shadow p-4 flex flex-col items-center text-center bg-white">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="mb-4 object-cover w-full h-48"
      />
      <h4 className="text-xl font-semibold">{name}</h4>
      <p className="text-gray-600">{description}</p>
      <p className="mt-2 font-bold">{price}</p>
    </div>
  );
}
