import { Plus, Download, Filter, Search } from 'lucide-react';

export function InventoryView() {
  const inventory = [
    {
      id: 'SKU-001',
      name: 'Fine Salt 500g',
      category: 'Retail',
      harare: 2450,
      bulawayo: 1800,
      mutare: 950,
      total: 5200,
      minStock: 500,
      price: '$5.00'
    },
    {
      id: 'SKU-002',
      name: 'Table Salt 1kg',
      category: 'Retail',
      harare: 1890,
      bulawayo: 1200,
      mutare: 680,
      total: 3770,
      minStock: 400,
      price: '$6.00'
    },
    {
      id: 'SKU-003',
      name: 'Coarse Salt 2kg',
      category: 'Wholesale',
      harare: 890,
      bulawayo: 450,
      mutare: 290,
      total: 1630,
      minStock: 200,
      price: '$10.00'
    },
    {
      id: 'SKU-004',
      name: 'Industrial Salt 25kg',
      category: 'Industrial',
      harare: 340,
      bulawayo: 180,
      mutare: 120,
      total: 640,
      minStock: 100,
      price: '$45.00'
    },
    {
      id: 'SKU-005',
      name: 'Sea Salt Premium 500g',
      category: 'Premium',
      harare: 580,
      bulawayo: 320,
      mutare: 190,
      total: 1090,
      minStock: 150,
      price: '$8.50'
    },
  ];

  const getStockStatus = (total: number, min: number) => {
    const percentage = (total / min) * 100;
    if (percentage < 100) return { color: 'text-red-600 bg-red-50', label: 'Critical' };
    if (percentage < 150) return { color: 'text-yellow-600 bg-yellow-50', label: 'Low' };
    return { color: 'text-green-600 bg-green-50', label: 'Good' };
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-3 flex-1 w-full sm:w-auto">
          <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg flex-1 sm:w-96">
            <Search size={18} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products, SKU..."
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
            <span>Add Product</span>
          </button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Product</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">SKU</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Category</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Harare</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Bulawayo</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Mutare</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Total Stock</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-muted-foreground">Status</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Price</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => {
                const status = getStockStatus(item.total, item.minStock);
                return (
                  <tr key={item.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                          <span className="text-primary font-medium text-sm">
                            {item.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-medium text-foreground">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{item.id}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-foreground">{item.harare.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center text-sm text-foreground">{item.bulawayo.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center text-sm text-foreground">{item.mutare.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center font-medium text-foreground">{item.total.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <span className={`inline-block px-2 py-1 rounded text-xs ${status.color}`}>
                          {status.label}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-foreground">{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Stock by Warehouse</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Harare Central</span>
              <span className="font-medium text-foreground">6,150 units</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: '65%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Bulawayo West</span>
              <span className="font-medium text-foreground">3,950 units</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: '42%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Mutare Branch</span>
              <span className="font-medium text-foreground">2,230 units</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary rounded-full h-2" style={{ width: '23%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Stock Value</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Inventory Value</p>
              <p className="text-2xl font-semibold text-foreground">$78,450</p>
            </div>
            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Retail Products</span>
                <span className="text-sm font-medium">$45,200</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Wholesale</span>
                <span className="text-sm font-medium">$18,900</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Industrial</span>
                <span className="text-sm font-medium">$14,350</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Stock added: Fine Salt 500g</p>
                <p className="text-xs text-muted-foreground">+200 units • Harare • 2h ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Order fulfilled: ORD-1045</p>
                <p className="text-xs text-muted-foreground">-500 units • Bulawayo • 5h ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Low stock alert triggered</p>
                <p className="text-xs text-muted-foreground">Table Salt 1kg • Mutare • 8h ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
