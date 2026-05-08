import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { InventoryView } from './components/InventoryView';
import { OrdersView } from './components/OrdersView';
import { CustomersView } from './components/CustomersView';
import { WarehousesView } from './components/WarehousesView';
import { DeliveriesView } from './components/DeliveriesView';
import { InvoicesView } from './components/InvoicesView';
import { PaymentsView } from './components/PaymentsView';
import { AnalyticsView } from './components/AnalyticsView';
import { SettingsView } from './components/SettingsView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const viewTitles: Record<string, string> = {
    dashboard: 'Dashboard Overview',
    inventory: 'Inventory Management',
    orders: 'Order Management',
    customers: 'Customer Management',
    warehouses: 'Warehouse Operations',
    deliveries: 'Delivery Tracking',
    invoices: 'Invoice Management',
    payments: 'Payment Processing',
    analytics: 'Sales Analytics',
    settings: 'System Settings',
  };

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView onNavigate={setActiveView} />;
      case 'inventory':
        return <InventoryView />;
      case 'orders':
        return <OrdersView />;
      case 'customers':
        return <CustomersView />;
      case 'warehouses':
        return <WarehousesView />;
      case 'deliveries':
        return <DeliveriesView />;
      case 'invoices':
        return <InvoicesView />;
      case 'payments':
        return <PaymentsView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {viewTitles[activeView]}
              </h3>
              <p className="text-muted-foreground">
                This section is under development
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="size-full flex bg-background">
      <div className="hidden lg:block">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
      </div>

      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0">
            <Sidebar activeView={activeView} onViewChange={(view) => {
              setActiveView(view);
              setSidebarOpen(false);
            }} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          title={viewTitles[activeView]}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {renderView()}
        </main>

        <footer className="border-t border-border px-6 py-4 bg-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-sm text-muted-foreground">
              © 2026 Champion Salt. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary">Support</a>
              <span>•</span>
              <a href="#" className="hover:text-primary">Documentation</a>
              <span>•</span>
              <a href="#" className="hover:text-primary">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}