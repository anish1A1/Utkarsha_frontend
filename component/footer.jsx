import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
        <div className="px-4 space-y-4">
          <h3 className="text-lg font-medium">ShopNow</h3>
          <p className="text-sm text-muted-foreground">
            Your one-stop shop for all your needs. Quality products at affordable prices.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/products" className="text-muted-foreground hover:text-foreground">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/products?category=electronics" className="text-muted-foreground hover:text-foreground">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="/products?category=clothing" className="text-muted-foreground hover:text-foreground">
                Clothing
              </Link>
            </li>
            <li>
              <Link href="/products?category=home" className="text-muted-foreground hover:text-foreground">
                Home & Kitchen
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/account" className="text-muted-foreground hover:text-foreground">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/orders" className="text-muted-foreground hover:text-foreground">
                Order History
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className="text-muted-foreground hover:text-foreground">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/vendor/dashboard" className="text-muted-foreground hover:text-foreground">
                Vendor Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                Shipping Information
              </Link>
            </li>
            <li>
              <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} ShopNow. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

