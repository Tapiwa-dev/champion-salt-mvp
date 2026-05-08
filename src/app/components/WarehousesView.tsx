import { Warehouse, Package, TrendingUp, AlertTriangle, MapPin } from 'lucide-react';

export function WarehousesView() {
  const warehouses = [
    {
      id: 'WH-001',
      name: 'Harare Central Warehouse',
      location: 'Harare, Workington',
      manager: 'Tendai Moyo',
      phone: '+263 77 111 2222',
      capacity: 10000,
      currentStock: 6150,
      products: 8,
      status: 'Operational',
      lastUpdate: '2 hours ago'
    },
    {
      id: 'WH-002',
      name: 'Bulawayo West Warehouse',
      location: 'Bulawayo, Belmont Industrial',
      manager: 'Nokuthula Ncube',
      phone: '+263 77 222 3333',
      capacity: 8000,
      currentStock: 3950,
      products: 7,
      status: 'Operational',
      lastUpdate: '1 hour ago'
    },
    {
      id: 'WH-003',
      name: 'Mutare Branch Warehouse',
      location: 'Mutare, Sakubva Industrial',
      manager: 'James Marufu',
      phone: '+263 77 333 4444',
      capacity: 5000,
      currentStock: 2230,
      products: 6,
      status: 'Operational',
      lastUpdate: '3 hours ago'
    },
  ];

  const stockByWarehouse = [
    { warehouse: 'Harare Central', product: 'Fine Salt 500g', quantity: 2450, status: 'Good' },
    { warehouse: 'Harare Central', product: 'Table Salt 1kg', quantity: 1890, status: 'Good' },
    { warehouse: 'Bulawayo West', product: 'Fine Salt 500g', quantity: 1800, status: 'Good' },
    { warehouse: 'Bulawayo West', product: 'Table Salt 1kg', quantity: 180, status: 'Low' },
    { warehouse: 'Mutare Branch', product: 'Fine Salt 500g', quantity: 950, status: 'Good' },
    { warehouse: 'Mutare Branch', product: 'Coarse Salt 2kg', quantity: 90, status: 'Critical' },
  ];

  const getUtilization = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100;
    return {
      percentage,
      color: percentage > 80 ? 'bg-red-600' : percentage > 60 ? 'bg-yellow-600' : 'bg-green-600',
      status: percentage > 80 ? 'High' : percentage > 60 ? 'Moderate' : 'Low'
    };
  };

  const getStockStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Good': 'bg-green-100 text-green-700',
      'Low': 'bg-yellow-100 text-yellow-700',
      'Critical': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Total Warehouses</p>
            <Warehouse size={20} className="text-primary" />
          </div>
          <p className="text-2xl font-semibold text-foreground">3</p>
          <p className="text-sm text-green-600 mt-1">All operational</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Total Capacity</p>
            <Package size={20} className="text-blue-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">23,000</p>
          <p className="text-sm text-muted-foreground mt-1">units</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Current Stock</p>
            <TrendingUp size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">12,330</p>
          <p className="text-sm text-muted-foreground mt-1">units</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Avg Utilization</p>
            <TrendingUp size={20} className="text-yellow-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">54%</p>
          <p className="text-sm text-green-600 mt-1">Healthy level</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {warehouses.map((warehouse) => {
          const utilization = getUtilization(warehouse.currentStock, warehouse.capacity);
          return (
            <div key={warehouse.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Warehouse size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{warehouse.name}</h3>
                    <p className="text-sm text-muted-foreground">{warehouse.id}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                  {warehouse.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-muted-foreground" />
                  <p className="text-sm text-foreground">{warehouse.location}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Warehouse Manager</p>
                  <p className="text-sm text-foreground">{warehouse.manager}</p>
                  <p className="text-xs text-muted-foreground">{warehouse.phone}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Capacity</span>
                  <span className="font-medium text-foreground">{warehouse.capacity.toLocaleString()} units</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current Stock</span>
                  <span className="font-medium text-foreground">{warehouse.currentStock.toLocaleString()} units</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Utilization</span>
                  <span className={`font-medium ${
                    utilization.percentage > 80 ? 'text-red-600' :
                    utilization.percentage > 60 ? 'text-yellow-600' : 'text-green-600'
                  }`}>
                    {utilization.percentage.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`rounded-full h-2 ${utilization.color}`}
                    style={{ width: `${utilization.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{warehouse.products} product types</span>
                  <span>Updated {warehouse.lastUpdate}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-sm">
                  View Details
                </button>
                <button className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted text-sm">
                  Manage Stock
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-4">Stock Distribution by Warehouse</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Warehouse</th>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Product</th>
                <th className="text-right py-3 text-sm text-muted-foreground font-medium">Quantity</th>
                <th className="text-center py-3 text-sm text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {stockByWarehouse.map((item, index) => (
                <tr key={index} className="border-b border-border last:border-0">
                  <td className="py-4 text-sm text-foreground">{item.warehouse}</td>
                  <td className="py-4 text-sm text-foreground">{item.product}</td>
                  <td className="py-4 text-sm text-foreground text-right font-medium">{item.quantity.toLocaleString()}</td>
                  <td className="py-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStockStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={20} className="text-yellow-600" />
            <h3 className="font-semibold text-foreground">Restock Recommendations</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
              <p className="text-sm font-medium text-foreground">Table Salt 1kg - Bulawayo West</p>
              <p className="text-xs text-muted-foreground mt-1">Current: 180 units | Recommended: +320 units</p>
            </div>
            <div className="p-3 border border-red-200 bg-red-50 rounded-lg">
              <p className="text-sm font-medium text-foreground">Coarse Salt 2kg - Mutare Branch</p>
              <p className="text-xs text-muted-foreground mt-1">Current: 90 units | Recommended: +210 units</p>
            </div>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
            Generate Transfer Orders
          </button>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Recent Transfers</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Harare → Bulawayo</p>
                <p className="text-xs text-muted-foreground">Fine Salt 500g • 500 units • Completed</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Harare → Mutare</p>
                <p className="text-xs text-muted-foreground">Table Salt 1kg • 300 units • In Transit</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
              <div className="flex-1">
                <p className="text-sm text-foreground">Bulawayo → Mutare</p>
                <p className="text-xs text-muted-foreground">Coarse Salt 2kg • 150 units • Completed</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
