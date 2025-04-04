"use client"

import Link from "next/link"
import { useState } from "react"
import { ShoppingCart, User, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isVendorDashboard = pathname.startsWith("/vendor")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="px-2 flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="text-xl font-bold">ShopNow</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/products" className="font-medium transition-colors hover:text-primary">
              All Products
            </Link>
            <Link href="/products?category=electronics" className="font-medium transition-colors hover:text-primary">
              Electronics
            </Link>
            <Link href="/products?category=clothing" className="font-medium transition-colors hover:text-primary">
              Clothing
            </Link>
            <Link href="/products?category=home" className="font-medium transition-colors hover:text-primary">
              Home & Kitchen
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <form className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="w-[200px] lg:w-[300px] pl-8" />
          </form>
          {!isVendorDashboard ? (
            <>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/account" className="w-full">
                      My Account
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/orders" className="w-full">
                      My Orders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/vendor/dashboard" className="w-full">
                      Vendor Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/auth/logout" className="w-full">
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/" className="w-full">
                    Customer View
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/vendor/settings" className="w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/logout" className="w-full">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col gap-4 py-4">
            <Link href="/products" className="font-medium" onClick={toggleMenu}>
              All Products
            </Link>
            <Link href="/products?category=electronics" className="font-medium" onClick={toggleMenu}>
              Electronics
            </Link>
            <Link href="/products?category=clothing" className="font-medium" onClick={toggleMenu}>
              Clothing
            </Link>
            <Link href="/products?category=home" className="font-medium" onClick={toggleMenu}>
              Home & Kitchen
            </Link>
            <Link href="/account" className="font-medium" onClick={toggleMenu}>
              My Account
            </Link>
            <Link href="/orders" className="font-medium" onClick={toggleMenu}>
              My Orders
            </Link>
            {!isVendorDashboard && (
              <Link href="/vendor/dashboard" className="font-medium" onClick={toggleMenu}>
                Vendor Dashboard
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

