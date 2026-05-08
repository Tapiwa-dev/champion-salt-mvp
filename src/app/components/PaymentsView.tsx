import { DollarSign, CreditCard, Smartphone, Building2, CheckCircle, Clock } from 'lucide-react';

export function PaymentsView() {
  const payments = [
    {
      id: 'PAY-1234',
      invoiceId: 'INV-2026-1044',
      customer: 'TM Supermarkets',
      amount: '$1,800',
      method: 'EcoCash',
      reference: 'EC789012345',
      date: '2026-05-06',
      time: '14:32',
      status: 'Completed',
      processor: 'EcoCash API'
    },
    {
      id: 'PAY-1233',
      invoiceId: 'INV-2026-1043',
      customer: 'Spar Outlets',
      amount: '$1,000',
      method: 'Bank Transfer',
      reference: 'CBZ45678901',
      date: '2026-05-06',
      time: '11:15',
      status: 'Completed',
      processor: 'CBZ Bank'
    },
    {
      id: 'PAY-1232',
      invoiceId: 'INV-2026-1041',
      customer: 'Food Lovers Market',
      amount: '$2,400',
      method: 'Paynow',
      reference: 'PN567890123',
      date: '2026-05-05',
      time: '09:45',
      status: 'Completed',
      processor: 'Paynow Gateway'
    },
    {
      id: 'PAY-1231',
      invoiceId: 'INV-2026-1045',
      customer: 'OK Zimbabwe',
      amount: '$2,500',
      method: 'Credit',
      reference: 'Pending',
      date: '2026-05-07',
      time: '-',
      status: 'Pending',
      processor: 'Credit Account'
    },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Completed': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Failed': 'bg-red-100 text-red-700',
      'Processing': 'bg-blue-100 text-blue-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'EcoCash':
      case 'Paynow':
        return <Smartphone size={20} className="text-green-600" />;
      case 'Bank Transfer':
        return <Building2 size={20} className="text-blue-600" />;
      case 'Credit':
        return <CreditCard size={20} className="text-purple-600" />;
      default:
        return <DollarSign size={20} className="text-gray-600" />;
    }
  };

  const totalReceived = payments
    .filter(p => p.status === 'Completed')
    .reduce((sum, p) => sum + parseFloat(p.amount.replace(/[$,]/g, '')), 0);

  const pendingAmount = payments
    .filter(p => p.status === 'Pending')
    .reduce((sum, p) => sum + parseFloat(p.amount.replace(/[$,]/g, '')), 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Total Received</p>
            <DollarSign size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">${totalReceived.toLocaleString()}</p>
          <p className="text-sm text-green-600 mt-1">This month</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Pending Payments</p>
            <Clock size={20} className="text-yellow-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">${pendingAmount.toLocaleString()}</p>
          <p className="text-sm text-yellow-600 mt-1">Awaiting confirmation</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Transactions Today</p>
            <CheckCircle size={20} className="text-primary" />
          </div>
          <p className="text-2xl font-semibold text-foreground">8</p>
          <p className="text-sm text-green-600 mt-1">100% success rate</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Avg Transaction</p>
            <DollarSign size={20} className="text-primary" />
          </div>
          <p className="text-2xl font-semibold text-foreground">$1,675</p>
          <p className="text-sm text-muted-foreground mt-1">Per transaction</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Payment ID</th>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Customer</th>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Invoice</th>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Method</th>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Reference</th>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Date & Time</th>
                <th className="text-right py-3 text-sm text-muted-foreground font-medium">Amount</th>
                <th className="text-center py-3 text-sm text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-4 text-sm font-medium text-foreground">{payment.id}</td>
                  <td className="py-4 text-sm text-foreground">{payment.customer}</td>
                  <td className="py-4 text-sm text-muted-foreground">{payment.invoiceId}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      {getMethodIcon(payment.method)}
                      <div>
                        <p className="text-sm text-foreground">{payment.method}</p>
                        <p className="text-xs text-muted-foreground">{payment.processor}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-muted-foreground">{payment.reference}</td>
                  <td className="py-4 text-sm text-foreground">
                    {payment.date}
                    {payment.time !== '-' && <span className="text-muted-foreground ml-1">{payment.time}</span>}
                  </td>
                  <td className="py-4 text-sm font-semibold text-foreground text-right">{payment.amount}</td>
                  <td className="py-4">
                    <div className="flex justify-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Payment Methods Distribution</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Smartphone size={24} className="text-green-600" />
                <div>
                  <p className="font-medium text-foreground">EcoCash</p>
                  <p className="text-xs text-muted-foreground">Mobile Money</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">$1,800</p>
                <p className="text-xs text-muted-foreground">35%</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Smartphone size={24} className="text-green-600" />
                <div>
                  <p className="font-medium text-foreground">Paynow</p>
                  <p className="text-xs text-muted-foreground">Instant Payment</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">$2,400</p>
                <p className="text-xs text-muted-foreground">47%</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Building2 size={24} className="text-blue-600" />
                <div>
                  <p className="font-medium text-foreground">Bank Transfer</p>
                  <p className="text-xs text-muted-foreground">Direct Deposit</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">$1,000</p>
                <p className="text-xs text-muted-foreground">18%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Payment Gateway Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-green-700">Paynow Gateway</p>
                  <p className="text-xs text-green-600">Connected</p>
                </div>
              </div>
              <span className="text-xs text-green-600">Online</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-green-700">EcoCash API</p>
                  <p className="text-xs text-green-600">Connected</p>
                </div>
              </div>
              <span className="text-xs text-green-600">Online</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-green-700">Bank Integration</p>
                  <p className="text-xs text-green-600">Connected</p>
                </div>
              </div>
              <span className="text-xs text-green-600">Online</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <h4 className="text-sm font-medium text-foreground mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              <button className="px-3 py-2 border border-border rounded-lg hover:bg-muted text-sm">
                Record Payment
              </button>
              <button className="px-3 py-2 border border-border rounded-lg hover:bg-muted text-sm">
                Send Receipt
              </button>
              <button className="px-3 py-2 border border-border rounded-lg hover:bg-muted text-sm">
                Reconcile
              </button>
              <button className="px-3 py-2 border border-border rounded-lg hover:bg-muted text-sm">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
