import { Filter, Download, Eye, CheckCircle, XCircle } from 'lucide-react';

export function OrdersView() {
  const orders = [
    {
      id: 'ORD-1045',
      customer: 'OK Zimbabwe',
      contact: '+263 77 123 4567',
      items: 3,
      total: '$2,500',
      date: '2026-05-07',
      status: 'Pending Approval',
      paymentStatus: 'Awaiting',
      deliveryAddress: 'Harare, CBD'
    },
    {
      id: 'ORD-1044',
      customer: 'TM Supermarkets',
      contact: '+263 77 234 5678',
      items: 2,
      total: '$1,800',
      date: '2026-05-06',
      status: 'Approved',
      paymentStatus: 'Paid',
      deliveryAddress: 'Bulawayo, Belmont'
    },
    {
      id: 'ORD-1043',
      customer: 'Spar Outlets',
      contact: '+263 77 345 6789',
      items: 1,
      total: '$1,000',
      date: '2026-05-06',
      status: 'In Transit',
      paymentStatus: 'Paid',
      deliveryAddress: 'Mutare, City Center'
    },
    {
      id: 'ORD-1042',
      customer: 'Pick n Pay',
      contact: '+263 77 456 7890',
      items: 4,
      total: '$900',
      date: '2026-05-05',
      status: 'Pending Approval',
      paymentStatus: 'Awaiting',
      deliveryAddress: 'Harare, Westgate'
    },
    {
      id: 'ORD-1041',
      customer: 'Food Lovers Market',
      contact: '+263 77 567 8901',
      items: 2,
      total: '$2,400',
      date: '2026-05-04',
      status: 'Delivered',
      paymentStatus: 'Paid',
      deliveryAddress: 'Harare, Borrowdale'
    },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Pending Approval': 'bg-yellow-100 text-yellow-700',
      'Approved': 'bg-blue-100 text-blue-700',
      'In Transit': 'bg-purple-100 text-purple-700',
      'Delivered': 'bg-green-100 text-green-700',
      'Cancelled': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getPaymentColor = (status: string) => {
    const colors: Record<string, string> = {
      'Paid': 'text-green-600',
      'Awaiting': 'text-yellow-600',
      'Overdue': 'text-red-600',
    };
    return colors[status] || 'text-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            All Orders
          </button>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
            Pending
          </button>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
            Approved
          </button>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Order ID</p>
                  <p className="font-semibold text-foreground">{order.id}</p>
                  <p className="text-xs text-muted-foreground mt-1">{order.date}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Customer</p>
                  <p className="font-medium text-foreground">{order.customer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{order.contact}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Delivery</p>
                  <p className="text-sm text-foreground">{order.deliveryAddress}</p>
                  <p className="text-xs text-muted-foreground mt-1">{order.items} items</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Payment</p>
                  <p className="font-semibold text-foreground">{order.total}</p>
                  <p className={`text-xs mt-1 ${getPaymentColor(order.paymentStatus)}`}>
                    {order.paymentStatus}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs whitespace-nowrap ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
                <div className="flex gap-2">
                  <button className="p-2 border border-border rounded-lg hover:bg-muted" title="View Details">
                    <Eye size={18} />
                  </button>
                  {order.status === 'Pending Approval' && (
                    <>
                      <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700" title="Approve">
                        <CheckCircle size={18} />
                      </button>
                      <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700" title="Reject">
                        <XCircle size={18} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Order Statistics</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Orders (This Month)</span>
              <span className="font-semibold text-foreground">124</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Pending Approval</span>
              <span className="font-semibold text-yellow-600">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">In Progress</span>
              <span className="font-semibold text-blue-600">18</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Completed</span>
              <span className="font-semibold text-green-600">82</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Revenue Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Revenue</span>
              <span className="font-semibold text-foreground">$48,290</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Paid Orders</span>
              <span className="font-semibold text-green-600">$42,150</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Pending Payment</span>
              <span className="font-semibold text-yellow-600">$6,140</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Average Order</span>
              <span className="font-semibold text-foreground">$389</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Top Customers</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-foreground">OK Zimbabwe</p>
                <p className="text-xs text-muted-foreground">12 orders</p>
              </div>
              <span className="text-sm font-semibold text-foreground">$8,450</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-foreground">TM Supermarkets</p>
                <p className="text-xs text-muted-foreground">8 orders</p>
              </div>
              <span className="text-sm font-semibold text-foreground">$6,200</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-foreground">Pick n Pay</p>
                <p className="text-xs text-muted-foreground">10 orders</p>
              </div>
              <span className="text-sm font-semibold text-foreground">$5,890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
