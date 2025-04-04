"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star, Truck, ShoppingBag } from "lucide-react"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [quantity, setQuantity] = useState(1)
    const {id} = React.use(params);
  // Mock product data
  const product = {
    id,
    name: `Product Name ${id}`,
    description:
      "This is a detailed description of the product. It includes information about the features, materials, and benefits of the product. The description is designed to help customers make an informed purchasing decision.",
    price: 99.99,
    discountPrice: 79.99,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    colors: ["Red", "Blue", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    specifications: [
      { name: "Material", value: "Premium Quality" },
      { name: "Dimensions", value: "10 x 20 x 5 cm" },
      { name: "Weight", value: "500g" },
      { name: "Warranty", value: "1 Year" },
    ],
    relatedProducts: [1, 2, 3, 4].map((id) => ({
      id,
      name: `Related Product ${id}`,
      price: 49.99 + id * 10,
      image: "/placeholder.svg?height=300&width=300",
    })),
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Products
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={"/images/hoodie.png"}
              alt={product.name}
              width={600}
              height={400}
              className=" w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg border">
                <Image
                  src={"/images/hoodie.png"}
                  alt={`${product.name} - Image ${index + 1}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">${product.discountPrice.toFixed(2)}</span>
              <span className="text-lg text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              <span className="rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                Save ${(product.price - product.discountPrice).toFixed(2)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Price includes VAT and shipping</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium">Color</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <Button key={color} variant="outline" className="h-8 px-3 text-xs">
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" className="h-8 w-8 p-0 text-xs">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none" onClick={decrementQuantity}>
                <Minus className="h-3 w-3" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <div className="flex h-8 w-12 items-center justify-center border-y text-sm">{quantity}</div>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none" onClick={incrementQuantity}>
                <Plus className="h-3 w-3" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>

            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>

            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to wishlist</span>
            </Button>

            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Free shipping on orders over $50</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Estimated delivery: 3-5 business days</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <div className="space-y-4">
              <p>{product.description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="mt-4">
            <div className="space-y-4">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                      <td className="px-4 py-2 font-medium">{spec.name}</td>
                      <td className="px-4 py-2">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="mt-4">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold">{product.rating}</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">{product.reviews} reviews</div>
                </div>
                <div className="flex-1 space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2
                    return (
                      <div key={star} className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-sm">
                          <span>{star}</span>
                          <Star className="h-3 w-3 fill-current" />
                        </div>
                        <div className="flex-1 rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-yellow-400" style={{ width: `${percentage}%` }} />
                        </div>
                        <div className="text-xs text-muted-foreground">{percentage}%</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                        <div>
                          <div className="font-medium">Customer Name {review}</div>
                          <div className="text-xs text-muted-foreground">{new Date().toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 5 - (review % 2) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {product.relatedProducts.map((relatedProduct) => (
            <Card key={relatedProduct.id} className="overflow-hidden">
              <Link href={`/products/${relatedProduct.id}`} className="group">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={"/images/hoodies.png"}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <div className="space-y-1">
                  <Link href={`/products/${relatedProduct.id}`} className="font-medium hover:underline">
                    {relatedProduct.name}
                  </Link>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">${relatedProduct.price.toFixed(2)}</span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="sr-only">Add to cart</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

