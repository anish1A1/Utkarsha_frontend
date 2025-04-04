import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { ShoppingBag, SlidersHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  // Mock products data
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product Name ${i + 1}`,
    category: i % 4 === 0 ? "Electronics" : i % 4 === 1 ? "Clothing" : i % 4 === 2 ? "Home & Kitchen" : "Beauty",
    price: 19.99 + i * 10,
    image: "/placeholder.svg?height=300&width=300",
  }))

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                Reset
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm font-medium">Categories</h3>
                <div className="space-y-2">
                  {["Electronics", "Clothing", "Home & Kitchen", "Beauty"].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.toLowerCase()}`} />
                      <label
                        htmlFor={`category-${category.toLowerCase()}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Price Range</h3>
                <Slider defaultValue={[0, 500]} max={1000} step={10} />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm">$0</span>
                  <span className="text-sm">$1000</span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Brands</h3>
                <div className="space-y-2">
                  {["Brand A", "Brand B", "Brand C", "Brand D"].map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={`brand-${brand.toLowerCase().replace(" ", "-")}`} />
                      <label
                        htmlFor={`brand-${brand.toLowerCase().replace(" ", "-")}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Ratings</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <label
                        htmlFor={`rating-${rating}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {rating} Stars & Up
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">All Products</h1>
              <p className="text-muted-foreground">Showing {products.length} products</p>
            </div>
            <div className="flex w-full sm:w-auto items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 sm:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              <Input placeholder="Search products..." className="h-8 w-full sm:w-[200px]" />
              <select className="h-8 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <Link href={`/products/${product.id}`} className="group">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={"/images/hoodies.png" }
                      alt={product.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <Link href={`/products/${product.id}`} className="font-medium hover:underline">
                      {product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <ShoppingBag className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-8 w-8">
                <span className="sr-only">Previous page</span>
                <span aria-hidden="true">‹</span>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <span className="sr-only">Next page</span>
                <span aria-hidden="true">›</span>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

