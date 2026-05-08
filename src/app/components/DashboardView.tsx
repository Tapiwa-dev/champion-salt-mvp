import { StatsCard } from './StatsCard';
import { Package, ShoppingCart, DollarSign, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

interface DashboardViewProps {
  onNavigate: (view: string) => void;
}

export function DashboardView({ onNavigate }: DashboardViewProps) {
  const stats = [
    {
      title: 'Total Inventory',
      value: '12,450',
      change: '+8% from last month',
      changeType: 'positive' as const,
      icon: Package,
      iconBg: 'bg-primary'
    },
    {
      title: 'Pending Orders',
      value: '24',
      change: '6 require urgent attention',
      changeType: 'neutral' as const,
      icon: ShoppingCart,
      iconBg: 'bg-accent'
    },
    {
      title: 'Revenue (This Month)',
      value: '$48,290',
      change: '+12.5% from last month',
      changeType: 'positive' as const,
      icon: DollarSign,
      iconBg: 'bg-green-600'
    },
    {
      title: 'Active Customers',
      value: '156',
      change: '+23 new this month',
      changeType: 'positive' as const,
      icon: TrendingUp,
      iconBg: 'bg-blue-600'
    },
  ];

  const recentOrders = [
    { id: 'ORD-1045', customer: 'OK Zimbabwe', product: 'Fine Salt 500g', quantity: 500, status: 'Processing', amount: '$2,500' },
    { id: 'ORD-1044', customer: 'TM Supermarkets', product: 'Table Salt 1kg', quantity: 300, status: 'Approved', amount: '$1,800' },
    { id: 'ORD-1043', customer: 'Spar Outlets', product: 'Fine Salt 500g', quantity: 200, status: 'Shipped', amount: '$1,000' },
    { id: 'ORD-1042', customer: 'Pick n Pay', product: 'Coarse Salt 2kg', quantity: 150, status: 'Processing', amount: '$900' },
    { id: 'ORD-1041', customer: 'Food Lovers Market', product: 'Table Salt 1kg', quantity: 400, status: 'Delivered', amount: '$2,400' },
  ];

  const lowStockAlerts = [
    { product: 'Fine Salt 500g', warehouse: 'Harare Central', current: 450, minimum: 500 },
    { product: 'Table Salt 1kg', warehouse: 'Bulawayo West', current: 180, minimum: 200 },
    { product: 'Coarse Salt 2kg', warehouse: 'Mutare Branch', current: 90, minimum: 100 },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Processing': 'bg-yellow-100 text-yellow-700',
      'Approved': 'bg-blue-100 text-blue-700',
      'Shipped': 'bg-purple-100 text-purple-700',
      'Delivered': 'bg-green-100 text-green-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Recent Orders</h3>
            <button className="text-primary text-sm hover:underline">View all</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-3 text-sm text-muted-foreground font-medium">Order ID</th>
                  <th className="pb-3 text-sm text-muted-foreground font-medium">Customer</th>
                  <th className="pb-3 text-sm text-muted-foreground font-medium hidden md:table-cell">Product</th>
                  <th className="pb-3 text-sm text-muted-foreground font-medium hidden sm:table-cell">Quantity</th>
                  <th className="pb-3 text-sm text-muted-foreground font-medium">Status</th>
                  <th className="pb-3 text-sm text-muted-foreground font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-4 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="py-4 text-sm text-foreground">{order.customer}</td>
                    <td className="py-4 text-sm text-muted-foreground hidden md:table-cell">{order.product}</td>
                    <td className="py-4 text-sm text-muted-foreground hidden sm:table-cell">{order.quantity}</td>
                    <td className="py-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm font-medium text-foreground text-right">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle size={20} className="text-accent" />
            <h3 className="font-semibold text-foreground">Low Stock Alerts</h3>
          </div>
          <div className="space-y-4">
            {lowStockAlerts.map((alert, index) => (
              <div key={index} className="border-l-4 border-accent bg-muted/50 p-4 rounded">
                <p className="font-medium text-sm text-foreground mb-1">{alert.product}</p>
                <p className="text-xs text-muted-foreground mb-2">{alert.warehouse}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Current: {alert.current}</span>
                  <span className="text-xs text-accent font-medium">Min: {alert.minimum}</span>
                </div>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-accent rounded-full h-2"
                    style={{ width: `${(alert.current / alert.minimum) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity">
            Create Restock Order
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onNavigate('orders')}
              className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <ShoppingCart size={24} className="text-primary" />
              <span className="text-sm text-foreground">New Order</span>
            </button>
            <button
              onClick={() => onNavigate('inventory')}
              className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <Package size={24} className="text-primary" />
              <span className="text-sm text-foreground">Add Product</span>
            </button>
            <button
              onClick={() => onNavigate('payments')}
              className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <DollarSign size={24} className="text-primary" />
              <span className="text-sm text-foreground">Record Payment</span>
            </button>
            <button
              onClick={() => onNavigate('orders')}
              className="flex flex-col items-center gap-2 p-4 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              <CheckCircle size={24} className="text-primary" />
              <span className="text-sm text-foreground">Approve Orders</span>
            </button>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700">WhatsApp Bot</span>
              </div>
              <span className="text-xs text-green-600">Online</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700">Payment Gateway</span>
              </div>
              <span className="text-xs text-green-600">Connected</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-700">Inventory Sync</span>
              </div>
              <span className="text-xs text-green-600">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
