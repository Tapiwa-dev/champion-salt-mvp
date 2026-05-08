import { FileText, Download, Send, Eye, DollarSign } from 'lucide-react';

export function InvoicesView() {
  const invoices = [
    {
      id: 'INV-2026-1045',
      orderId: 'ORD-1045',
      customer: 'OK Zimbabwe',
      issueDate: '2026-05-07',
      dueDate: '2026-05-21',
      amount: '$2,500',
      paid: '$0',
      balance: '$2,500',
      status: 'Pending',
      paymentMethod: 'Credit',
      items: 3
    },
    {
      id: 'INV-2026-1044',
      orderId: 'ORD-1044',
      customer: 'TM Supermarkets',
      issueDate: '2026-05-06',
      dueDate: '2026-05-20',
      amount: '$1,800',
      paid: '$1,800',
      balance: '$0',
      status: 'Paid',
      paymentMethod: 'EcoCash',
      items: 2
    },
    {
      id: 'INV-2026-1043',
      orderId: 'ORD-1043',
      customer: 'Spar Outlets',
      issueDate: '2026-05-06',
      dueDate: '2026-05-20',
      amount: '$1,000',
      paid: '$1,000',
      balance: '$0',
      status: 'Paid',
      paymentMethod: 'Bank Transfer',
      items: 1
    },
    {
      id: 'INV-2026-1042',
      orderId: 'ORD-1042',
      customer: 'Pick n Pay',
      issueDate: '2026-05-05',
      dueDate: '2026-05-19',
      amount: '$900',
      paid: '$0',
      balance: '$900',
      status: 'Pending',
      paymentMethod: 'Credit',
      items: 4
    },
    {
      id: 'INV-2026-1041',
      orderId: 'ORD-1041',
      customer: 'Food Lovers Market',
      issueDate: '2026-05-04',
      dueDate: '2026-05-18',
      amount: '$2,400',
      paid: '$2,400',
      balance: '$0',
      status: 'Paid',
      paymentMethod: 'Paynow',
      items: 2
    },
    {
      id: 'INV-2026-1040',
      orderId: 'ORD-1040',
      customer: 'OK Zimbabwe',
      issueDate: '2026-04-28',
      dueDate: '2026-05-12',
      amount: '$3,200',
      paid: '$0',
      balance: '$3,200',
      status: 'Overdue',
      paymentMethod: 'Credit',
      items: 5
    },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Paid': 'bg-green-100 text-green-700',
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Overdue': 'bg-red-100 text-red-700',
      'Partial': 'bg-blue-100 text-blue-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const totalInvoiced = invoices.reduce((sum, inv) => sum + parseFloat(inv.amount.replace(/[$,]/g, '')), 0);
  const totalPaid = invoices.reduce((sum, inv) => sum + parseFloat(inv.paid.replace(/[$,]/g, '')), 0);
  const totalOutstanding = invoices.reduce((sum, inv) => sum + parseFloat(inv.balance.replace(/[$,]/g, '')), 0);
  const overdueCount = invoices.filter(inv => inv.status === 'Overdue').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Total Invoiced</p>
            <FileText size={20} className="text-primary" />
          </div>
          <p className="text-2xl font-semibold text-foreground">${totalInvoiced.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground mt-1">This month</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Total Paid</p>
            <DollarSign size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">${totalPaid.toLocaleString()}</p>
          <p className="text-sm text-green-600 mt-1">{((totalPaid/totalInvoiced)*100).toFixed(1)}% collected</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Outstanding</p>
            <DollarSign size={20} className="text-yellow-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">${totalOutstanding.toLocaleString()}</p>
          <p className="text-sm text-yellow-600 mt-1">Pending collection</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Overdue</p>
            <DollarSign size={20} className="text-red-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">{overdueCount}</p>
          <p className="text-sm text-red-600 mt-1">Requires action</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
          All Invoices
        </button>
        <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
          Paid
        </button>
        <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
          Pending
        </button>
        <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
          Overdue
        </button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Invoice #</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Issue Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Due Date</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Amount</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Paid</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Balance</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Status</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-foreground">{invoice.id}</p>
                      <p className="text-xs text-muted-foreground">{invoice.orderId}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-foreground">{invoice.customer}</p>
                      <p className="text-xs text-muted-foreground">{invoice.paymentMethod}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">{invoice.issueDate}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{invoice.dueDate}</td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground text-right">{invoice.amount}</td>
                  <td className="px-6 py-4 text-sm text-green-600 text-right">{invoice.paid}</td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground text-right">{invoice.balance}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <button className="p-2 border border-border rounded-lg hover:bg-muted" title="View Invoice">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 border border-border rounded-lg hover:bg-muted" title="Download PDF">
                        <Download size={16} />
                      </button>
                      {invoice.status !== 'Paid' && (
                        <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90" title="Send Reminder">
                          <Send size={16} />
                        </button>
                      )}
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
          <h3 className="font-semibold text-foreground mb-4">Payment Methods Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Credit</span>
              <span className="font-medium text-foreground">$6,600 (54%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: '54%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">EcoCash / Paynow</span>
              <span className="font-medium text-foreground">$4,200 (34%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 rounded-full h-2" style={{ width: '34%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Bank Transfer</span>
              <span className="font-medium text-foreground">$1,000 (12%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 rounded-full h-2" style={{ width: '12%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Aging Report</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
              <div>
                <p className="text-sm font-medium text-green-700">Current (0-30 days)</p>
                <p className="text-xs text-green-600">3 invoices</p>
              </div>
              <span className="font-semibold text-green-700">$3,400</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div>
                <p className="text-sm font-medium text-yellow-700">31-60 days</p>
                <p className="text-xs text-yellow-600">0 invoices</p>
              </div>
              <span className="font-semibold text-yellow-700">$0</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-50 border border-red-200 rounded-lg">
              <div>
                <p className="text-sm font-medium text-red-700">Over 60 days</p>
                <p className="text-xs text-red-600">1 invoice</p>
              </div>
              <span className="font-semibold text-red-700">$3,200</span>
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90">
            Send Payment Reminders
          </button>
        </div>
      </div>
    </div>
  );
}
