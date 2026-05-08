import { Plus, Download, Filter, Search, Mail, Phone, CreditCard, TrendingUp } from 'lucide-react';

export function CustomersView() {
  const customers = [
    {
      id: 'CUST-001',
      name: 'OK Zimbabwe',
      contact: 'John Moyo',
      phone: '+263 77 123 4567',
      email: 'procurement@ok.co.zw',
      address: 'Harare CBD',
      creditLimit: '$50,000',
      creditUsed: '$12,450',
      totalOrders: 45,
      totalSpent: '$126,500',
      status: 'Active',
      lastOrder: '2026-05-07'
    },
    {
      id: 'CUST-002',
      name: 'TM Supermarkets',
      contact: 'Sarah Ndlovu',
      phone: '+263 77 234 5678',
      email: 'orders@tm.co.zw',
      address: 'Bulawayo, Belmont',
      creditLimit: '$40,000',
      creditUsed: '$8,200',
      totalOrders: 38,
      totalSpent: '$98,750',
      status: 'Active',
      lastOrder: '2026-05-06'
    },
    {
      id: 'CUST-003',
      name: 'Spar Outlets',
      contact: 'Michael Chikwanha',
      phone: '+263 77 345 6789',
      email: 'supply@spar.co.zw',
      address: 'Mutare City Center',
      creditLimit: '$30,000',
      creditUsed: '$15,600',
      totalOrders: 32,
      totalSpent: '$78,900',
      status: 'Active',
      lastOrder: '2026-05-06'
    },
    {
      id: 'CUST-004',
      name: 'Pick n Pay',
      contact: 'Grace Mutasa',
      phone: '+263 77 456 7890',
      email: 'procurement@pnp.co.zw',
      address: 'Harare, Westgate',
      creditLimit: '$35,000',
      creditUsed: '$4,100',
      totalOrders: 28,
      totalSpent: '$65,400',
      status: 'Active',
      lastOrder: '2026-05-05'
    },
    {
      id: 'CUST-005',
      name: 'Food Lovers Market',
      contact: 'Tafadzwa Sibanda',
      phone: '+263 77 567 8901',
      email: 'orders@foodlovers.co.zw',
      address: 'Harare, Borrowdale',
      creditLimit: '$25,000',
      creditUsed: '$18,900',
      totalOrders: 22,
      totalSpent: '$54,200',
      status: 'Warning',
      lastOrder: '2026-05-04'
    },
  ];

  const getCreditStatus = (limit: string, used: string) => {
    const limitNum = parseFloat(limit.replace(/[$,]/g, ''));
    const usedNum = parseFloat(used.replace(/[$,]/g, ''));
    const percentage = (usedNum / limitNum) * 100;

    if (percentage > 80) return { color: 'text-red-600', bg: 'bg-red-100', label: 'High Risk' };
    if (percentage > 50) return { color: 'text-yellow-600', bg: 'bg-yellow-100', label: 'Monitor' };
    return { color: 'text-green-600', bg: 'bg-green-100', label: 'Good' };
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3 flex-1 w-full sm:w-auto">
          <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg flex-1 sm:w-96">
            <Search size={18} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search customers..."
              className="bg-transparent border-none outline-none flex-1 text-sm"
            />
          </div>
          <button className="p-2 border border-border rounded-lg hover:bg-muted">
            <Filter size={20} />
          </button>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted">
            <Download size={18} />
            <span>Export</span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
            <Plus size={18} />
            <span>Add Customer</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Total Customers</p>
            <TrendingUp size={20} className="text-primary" />
          </div>
          <p className="text-2xl font-semibold text-foreground">156</p>
          <p className="text-sm text-green-600 mt-1">+23 this month</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Active Customers</p>
            <CreditCard size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">142</p>
          <p className="text-sm text-muted-foreground mt-1">91% of total</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Credit Extended</p>
            <CreditCard size={20} className="text-yellow-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">$180K</p>
          <p className="text-sm text-muted-foreground mt-1">Total limit</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Outstanding</p>
            <CreditCard size={20} className="text-red-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">$59K</p>
          <p className="text-sm text-yellow-600 mt-1">33% utilized</p>
        </div>
      </div>

      <div className="grid gap-4">
        {customers.map((customer) => {
          const creditStatus = getCreditStatus(customer.creditLimit, customer.creditUsed);
          return (
            <div key={customer.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {customer.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{customer.name}</h3>
                        <p className="text-sm text-muted-foreground">{customer.id}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {customer.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Contact Person</p>
                      <p className="text-sm text-foreground">{customer.contact}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Phone</p>
                      <div className="flex items-center gap-1">
                        <Phone size={14} className="text-muted-foreground" />
                        <p className="text-sm text-foreground">{customer.phone}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Email</p>
                      <div className="flex items-center gap-1">
                        <Mail size={14} className="text-muted-foreground" />
                        <p className="text-sm text-foreground truncate">{customer.email}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Location</p>
                      <p className="text-sm text-foreground">{customer.address}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:border-l lg:pl-6 border-border">
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Total Orders</p>
                      <p className="text-lg font-semibold text-foreground">{customer.totalOrders}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Total Spent</p>
                      <p className="text-lg font-semibold text-foreground">{customer.totalSpent}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Credit Limit</p>
                      <p className="text-lg font-semibold text-foreground">{customer.creditLimit}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Credit Used</p>
                      <p className="text-lg font-semibold text-foreground">{customer.creditUsed}</p>
                      <span className={`inline-block px-2 py-0.5 rounded text-xs mt-1 ${creditStatus.color} ${creditStatus.bg}`}>
                        {creditStatus.label}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground mb-1">Credit Utilization</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`rounded-full h-2 ${
                          parseFloat(customer.creditUsed.replace(/[$,]/g, '')) / parseFloat(customer.creditLimit.replace(/[$,]/g, '')) > 0.8
                            ? 'bg-red-600'
                            : parseFloat(customer.creditUsed.replace(/[$,]/g, '')) / parseFloat(customer.creditLimit.replace(/[$,]/g, '')) > 0.5
                            ? 'bg-yellow-600'
                            : 'bg-green-600'
                        }`}
                        style={{
                          width: `${(parseFloat(customer.creditUsed.replace(/[$,]/g, '')) / parseFloat(customer.creditLimit.replace(/[$,]/g, ''))) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-sm">
                  View Details
                </button>
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted text-sm">
                  Create Order
                </button>
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted text-sm">
                  View History
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
