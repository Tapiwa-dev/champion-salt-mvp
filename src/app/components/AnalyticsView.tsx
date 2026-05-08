import { BarChart3, TrendingUp, DollarSign, Package, Users, ShoppingCart } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function AnalyticsView() {
  const revenueData = [
    { month: 'Jan', revenue: 38000, orders: 98 },
    { month: 'Feb', revenue: 42000, orders: 112 },
    { month: 'Mar', revenue: 45000, orders: 125 },
    { month: 'Apr', revenue: 48000, orders: 138 },
    { month: 'May', revenue: 48290, orders: 124 },
  ];

  const productSalesData = [
    { name: 'Fine Salt 500g', value: 35 },
    { name: 'Table Salt 1kg', value: 28 },
    { name: 'Coarse Salt 2kg', value: 18 },
    { name: 'Industrial Salt 25kg', value: 12 },
    { name: 'Premium Sea Salt', value: 7 },
  ];

  const warehousePerformance = [
    { warehouse: 'Harare', orders: 65, revenue: 28500 },
    { warehouse: 'Bulawayo', orders: 38, revenue: 16200 },
    { warehouse: 'Mutare', orders: 21, revenue: 9590 },
  ];

  const COLORS = ['#1e40af', '#dc2626', '#3b82f6', '#64748b', '#ef4444'];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <DollarSign size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">$48,290</p>
          <p className="text-sm text-green-600 mt-1">+12.5% vs last month</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Orders Fulfilled</p>
            <ShoppingCart size={20} className="text-primary" />
          </div>
          <p className="text-2xl font-semibold text-foreground">124</p>
          <p className="text-sm text-yellow-600 mt-1">-10% vs last month</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Avg Order Value</p>
            <TrendingUp size={20} className="text-blue-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">$389</p>
          <p className="text-sm text-green-600 mt-1">+25% vs last month</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Customer Growth</p>
            <Users size={20} className="text-purple-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">+23</p>
          <p className="text-sm text-green-600 mt-1">New customers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Revenue Trend (Last 5 Months)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#1e40af"
                strokeWidth={2}
                dot={{ fill: '#1e40af', r: 4 }}
                name="Revenue ($)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Product Sales Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productSalesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {productSalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Warehouse Performance Comparison</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={warehousePerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="warehouse" stroke="#64748b" />
            <YAxis yAxisId="left" stroke="#64748b" />
            <YAxis yAxisId="right" orientation="right" stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar yAxisId="left" dataKey="orders" fill="#1e40af" name="Orders" />
            <Bar yAxisId="right" dataKey="revenue" fill="#dc2626" name="Revenue ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Top Customers by Revenue</h3>
          <div className="space-y-3">
            {[
              { name: 'OK Zimbabwe', revenue: '$8,450', orders: 12 },
              { name: 'TM Supermarkets', revenue: '$6,200', orders: 8 },
              { name: 'Pick n Pay', revenue: '$5,890', orders: 10 },
              { name: 'Spar Outlets', revenue: '$4,320', orders: 7 },
              { name: 'Food Lovers Market', revenue: '$3,950', orders: 6 },
            ].map((customer, index) => (
              <div key={index} className="flex justify-between items-center pb-3 border-b border-border last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground">{customer.name}</p>
                  <p className="text-xs text-muted-foreground">{customer.orders} orders</p>
                </div>
                <p className="font-semibold text-foreground">{customer.revenue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {[
              { name: 'Fine Salt 500g', units: 8950, revenue: '$44,750' },
              { name: 'Table Salt 1kg', units: 6820, revenue: '$40,920' },
              { name: 'Coarse Salt 2kg', units: 3450, revenue: '$34,500' },
              { name: 'Premium Sea Salt 500g', units: 1680, revenue: '$14,280' },
              { name: 'Industrial Salt 25kg', units: 890, revenue: '$40,050' },
            ].map((product, index) => (
              <div key={index} className="pb-3 border-b border-border last:border-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium text-foreground">{product.name}</p>
                  <p className="font-semibold text-foreground">{product.revenue}</p>
                </div>
                <p className="text-xs text-muted-foreground">{product.units.toLocaleString()} units sold</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Key Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">Order Fulfillment Rate</span>
                <span className="text-sm font-semibold text-green-600">98.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 rounded-full h-2" style={{ width: '98.5%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">On-Time Delivery</span>
                <span className="text-sm font-semibold text-green-600">96.2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 rounded-full h-2" style={{ width: '96.2%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                <span className="text-sm font-semibold text-green-600">4.8/5.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 rounded-full h-2" style={{ width: '96%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">Stock Availability</span>
                <span className="text-sm font-semibold text-yellow-600">87.3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 rounded-full h-2" style={{ width: '87.3%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-muted-foreground">Payment Collection</span>
                <span className="text-sm font-semibold text-blue-600">91.4%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{ width: '91.4%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
