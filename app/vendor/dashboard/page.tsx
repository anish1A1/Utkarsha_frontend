"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Calendar,
  DollarSign,
  Download,
  Package,
  Search,
  ShoppingBag,
  Users,
} from "lucide-react"

export default function VendorDashboard() {
  const [dateRange, setDateRange] = useState("7d")

  // Mock data
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,345.67",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Orders",
      value: "356",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingBag,
    },
    {
      title: "Products",
      value: "124",
      change: "+3.1%",
      trend: "up",
      icon: Package,
    },
    {
      title: "Customers",
      value: "2,567",
      change: "+15.3%",
      trend: "up",
      icon: Users,
    },
  ]

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      date: "2023-04-01",
      amount: "$129.99",
      status: "Completed",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      date: "2023-04-02",
      amount: "$79.99",
      status: "Processing",
    },
    {
      id: "ORD-003",
      customer: "Bob Johnson",
      date: "2023-04-03",
      amount: "$199.99",
      status: "Completed",
    },
    {
      id: "ORD-004",
      customer: "Alice Brown",
      date: "2023-04-04",
      amount: "$59.99",
      status: "Shipped",
    },
    {
      id: "ORD-005",
      customer: "Charlie Wilson",
      date: "2023-04-05",
      amount: "$149.99",
      status: "Processing",
    },
  ]

  const topProducts = [
    {
      id: 1,
      name: "Product Name 1",
      category: "Electronics",
      sold: 156,
      revenue: "$7,800.00",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Product Name 2",
      category: "Clothing",
      sold: 132,
      revenue: "$6,600.00",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Product Name 3",
      category: "Home & Kitchen",
      sold: 98,
      revenue: "$4,900.00",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 4,
      name: "Product Name 4",
      category: "Beauty",
      sold: 87,
      revenue: "$4,350.00",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 5,
      name: "Product Name 5",
      category: "Electronics",
      sold: 76,
      revenue: "$3,800.00",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <div className="flex-1 space-y-8 p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Vendor Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-[200px] pl-8" />
          </div>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            {dateRange === "7d" ? "Last 7 days" : dateRange === "30d" ? "Last 30 days" : "Last 12 months"}
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-muted-foreground">{stat.title}</span>
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    stat.trend === "up" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <stat.icon className={`h-6 w-6 ${stat.trend === "up" ? "text-green-700" : "text-red-700"}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.trend === "up" ? (
                  <ArrowUp className="mr-1 h-4 w-4 text-green-700" />
                ) : (
                  <ArrowDown className="mr-1 h-4 w-4 text-red-700" />
                )}
                <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-700" : "text-red-700"}`}>
                  {stat.change}
                </span>
                <span className="ml-1 text-sm text-muted-foreground">from last period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Revenue Chart */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>View your revenue trends over time</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Tabs defaultValue="7d" value={dateRange} onValueChange={setDateRange}>
                <TabsList>
                  <TabsTrigger value="7d">7d</TabsTrigger>
                  <TabsTrigger value="30d">30d</TabsTrigger>
                  <TabsTrigger value="12m">12m</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download data</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <div className="flex h-full items-center justify-center">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Revenue chart visualization</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Your best-selling products this period</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{product.name}</span>
                      <span className="font-medium">{product.revenue}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{product.category}</span>
                      <span>{product.sold} sold</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Manage your recent customer orders</CardDescription>
          </div>
          <Link href="/vendor/orders">
            <Button variant="outline">View All</Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm">
                  <th className="px-4 py-3 text-left font-medium">Order ID</th>
                  <th className="px-4 py-3 text-left font-medium">Customer</th>
                  <th className="px-4 py-3 text-left font-medium">Date</th>
                  <th className="px-4 py-3 text-left font-medium">Amount</th>
                  <th className="px-4 py-3 text-left font-medium">Status</th>
                  <th className="px-4 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-3 text-sm font-medium">{order.id}</td>
                    <td className="px-4 py-3 text-sm">{order.customer}</td>
                    <td className="px-4 py-3 text-sm">{order.date}</td>
                    <td className="px-4 py-3 text-sm">{order.amount}</td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Processing"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-sm">
                      <Link href={`/vendor/orders/${order.id}`}>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

