import { Settings, Bell, Shield, Users, Smartphone, DollarSign, Warehouse } from 'lucide-react';

export function SettingsView() {
  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Settings size={24} className="text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Company Settings</h2>
            <p className="text-sm text-muted-foreground">Manage your business information and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Company Name</label>
            <input
              type="text"
              defaultValue="Champion Salt"
              className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Business Registration</label>
            <input
              type="text"
              defaultValue="BR-2024-12345"
              className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Email Address</label>
            <input
              type="email"
              defaultValue="info@championsalt.co.zw"
              className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
            <input
              type="tel"
              defaultValue="+263 77 000 0000"
              className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-muted-foreground mb-2 block">Head Office Address</label>
            <textarea
              defaultValue="123 Industrial Road, Workington, Harare, Zimbabwe"
              rows={2}
              className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Notifications</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Low Stock Alerts</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">New Order Notifications</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Payment Received</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Delivery Updates</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">System Alerts</span>
              <input type="checkbox" defaultChecked className="w-4 h-4" />
            </label>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} className="text-primary" />
            <h3 className="font-semibold text-foreground">Security</h3>
          </div>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted text-left">
              Change Password
            </button>
            <button className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted text-left">
              Two-Factor Authentication
            </button>
            <button className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted text-left">
              Session Management
            </button>
            <button className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted text-left">
              Activity Log
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Smartphone size={20} className="text-primary" />
          <h3 className="font-semibold text-foreground">WhatsApp Bot Configuration</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">WhatsApp Business Number</label>
            <input
              type="tel"
              defaultValue="+263 77 999 8888"
              className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-2 block">Bot Status</label>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-700">Online & Active</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-muted-foreground mb-2 block">Welcome Message</label>
            <textarea
              defaultValue="Welcome to Champion Salt! 🧂 How can we help you today? Type 'menu' to see our products."
              rows={3}
              className="w-full px-4 py-2 border border-border rounded-lg bg-input-background"
            />
          </div>
          <div className="md:col-span-2 flex gap-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
              Update Bot Settings
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
              Test Bot
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
              View Logs
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <DollarSign size={20} className="text-primary" />
          <h3 className="font-semibold text-foreground">Payment Gateway Settings</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600/10 rounded-lg flex items-center justify-center">
                <Smartphone size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">Paynow Gateway</p>
                <p className="text-xs text-muted-foreground">Integration Key: PW-****-****-1234</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600">Connected</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600/10 rounded-lg flex items-center justify-center">
                <Smartphone size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-medium text-foreground">EcoCash API</p>
                <p className="text-xs text-muted-foreground">Merchant Code: EC-****-5678</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600">Connected</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
              Configure Gateways
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">
              Test Transactions
            </button>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Users size={20} className="text-primary" />
          <h3 className="font-semibold text-foreground">User Management</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Name</th>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Email</th>
                <th className="text-left py-3 text-sm text-muted-foreground font-medium">Role</th>
                <th className="text-center py-3 text-sm text-muted-foreground font-medium">Status</th>
                <th className="text-center py-3 text-sm text-muted-foreground font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Admin User', email: 'admin@championsalt.co.zw', role: 'Administrator', status: 'Active' },
                { name: 'Tendai Moyo', email: 'tendai@championsalt.co.zw', role: 'Warehouse Manager', status: 'Active' },
                { name: 'Sarah Ndlovu', email: 'sarah@championsalt.co.zw', role: 'Sales Manager', status: 'Active' },
              ].map((user, index) => (
                <tr key={index} className="border-b border-border last:border-0">
                  <td className="py-4 text-sm text-foreground">{user.name}</td>
                  <td className="py-4 text-sm text-muted-foreground">{user.email}</td>
                  <td className="py-4 text-sm text-foreground">{user.role}</td>
                  <td className="py-4 text-center">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 text-center">
                    <button className="px-3 py-1 border border-border rounded-lg hover:bg-muted text-xs">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90">
          Add New User
        </button>
      </div>
    </div>
  );
}
