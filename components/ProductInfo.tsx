import { Button } from "@/components/ui/button";

export function ProductInfo() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Nike Air Jordan 1</h1>
      <p className="text-xl text-green-600">$200</p>
      <p className="text-sm text-gray-600">
        Iconic design. Legendary comfort. This Air Jordan 1 continues the
        legacy.
      </p>
      <select className="border p-2 rounded w-full">
        <option>Select Size</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <Button className="w-full">Add to Cart</Button>
    </div>
  );
}
