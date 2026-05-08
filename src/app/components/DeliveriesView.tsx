import { Truck, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export function DeliveriesView() {
  const deliveries = [
    {
      id: 'DEL-1045',
      orderId: 'ORD-1045',
      customer: 'OK Zimbabwe',
      driver: 'Tendai Chikwava',
      vehicle: 'ZW 456-789',
      from: 'Harare Central',
      to: 'Harare CBD',
      distance: '8 km',
      status: 'In Transit',
      progress: 65,
      estimatedTime: '15 mins',
      departureTime: '10:30 AM',
      items: 3,
      weight: '500 kg'
    },
    {
      id: 'DEL-1044',
      orderId: 'ORD-1044',
      customer: 'TM Supermarkets',
      driver: 'Sarah Moyo',
      vehicle: 'ZW 123-456',
      from: 'Bulawayo West',
      to: 'Bulawayo Belmont',
      distance: '12 km',
      status: 'Delivered',
      progress: 100,
      estimatedTime: 'Completed',
      departureTime: '08:00 AM',
      items: 2,
      weight: '300 kg'
    },
    {
      id: 'DEL-1043',
      orderId: 'ORD-1043',
      customer: 'Spar Outlets',
      driver: 'Michael Ncube',
      vehicle: 'ZW 789-012',
      from: 'Mutare Branch',
      to: 'Mutare City Center',
      distance: '5 km',
      status: 'In Transit',
      progress: 40,
      estimatedTime: '25 mins',
      departureTime: '11:00 AM',
      items: 1,
      weight: '200 kg'
    },
    {
      id: 'DEL-1042',
      orderId: 'ORD-1042',
      customer: 'Pick n Pay',
      driver: 'James Sibanda',
      vehicle: 'ZW 345-678',
      from: 'Harare Central',
      to: 'Harare Westgate',
      distance: '15 km',
      status: 'Pending',
      progress: 0,
      estimatedTime: 'Not started',
      departureTime: '02:00 PM',
      items: 4,
      weight: '450 kg'
    },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Pending': 'bg-gray-100 text-gray-700',
      'In Transit': 'bg-blue-100 text-blue-700',
      'Delivered': 'bg-green-100 text-green-700',
      'Delayed': 'bg-red-100 text-red-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle size={20} className="text-green-600" />;
      case 'In Transit':
        return <Truck size={20} className="text-blue-600" />;
      case 'Delayed':
        return <AlertCircle size={20} className="text-red-600" />;
      default:
        return <Clock size={20} className="text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Active Deliveries</p>
            <Truck size={20} className="text-blue-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">2</p>
          <p className="text-sm text-blue-600 mt-1">In transit now</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Completed Today</p>
            <CheckCircle size={20} className="text-green-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">8</p>
          <p className="text-sm text-green-600 mt-1">100% on time</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Pending</p>
            <Clock size={20} className="text-yellow-600" />
          </div>
          <p className="text-2xl font-semibold text-foreground">1</p>
          <p className="text-sm text-muted-foreground mt-1">Scheduled</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Avg Delivery Time</p>
            <Clock size={20} className="text-primary" />
          </div>
          <p className="text-2xl font-semibold text-foreground">42 min</p>
          <p className="text-sm text-green-600 mt-1">-8% vs last week</p>
        </div>
      </div>

      <div className="grid gap-4">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(delivery.status)}
                    <div>
                      <h3 className="font-semibold text-foreground">{delivery.id}</h3>
                      <p className="text-sm text-muted-foreground">Order: {delivery.orderId}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(delivery.status)}`}>
                    {delivery.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Customer</p>
                    <p className="text-sm font-medium text-foreground">{delivery.customer}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Driver</p>
                    <p className="text-sm font-medium text-foreground">{delivery.driver}</p>
                    <p className="text-xs text-muted-foreground">{delivery.vehicle}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Departure</p>
                    <p className="text-sm font-medium text-foreground">{delivery.departureTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">From</p>
                      <p className="text-sm font-medium text-foreground">{delivery.from}</p>
                    </div>
                  </div>
                  <div className="flex-1 border-t border-dashed border-border"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">To</p>
                      <p className="text-sm font-medium text-foreground">{delivery.to}</p>
                    </div>
                  </div>
                </div>

                {delivery.status === 'In Transit' && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-muted-foreground">Delivery Progress</span>
                      <span className="text-xs font-medium text-primary">{delivery.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{ width: `${delivery.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">ETA: {delivery.estimatedTime}</p>
                  </div>
                )}
              </div>

              <div className="lg:border-l lg:pl-6 border-border">
                <div className="space-y-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Distance</p>
                    <p className="text-lg font-semibold text-foreground">{delivery.distance}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Items</p>
                    <p className="text-lg font-semibold text-foreground">{delivery.items}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground mb-1">Weight</p>
                    <p className="text-lg font-semibold text-foreground">{delivery.weight}</p>
                  </div>
                </div>

                {delivery.status === 'In Transit' && (
                  <button className="w-full mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 text-sm">
                    Track Live
                  </button>
                )}
                {delivery.status === 'Delivered' && (
                  <button className="w-full mt-4 px-4 py-2 border border-border rounded-lg hover:bg-muted text-sm">
                    View POD
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Fleet Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2">
                <Truck size={20} className="text-green-600" />
                <span className="text-sm text-green-700">Active Vehicles</span>
              </div>
              <span className="font-semibold text-green-700">2</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="flex items-center gap-2">
                <Truck size={20} className="text-gray-600" />
                <span className="text-sm text-gray-700">Available Vehicles</span>
              </div>
              <span className="font-semibold text-gray-700">3</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center gap-2">
                <Truck size={20} className="text-yellow-600" />
                <span className="text-sm text-yellow-700">Under Maintenance</span>
              </div>
              <span className="font-semibold text-yellow-700">1</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Performance Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">On-time Delivery Rate</span>
              <span className="font-semibold text-green-600">98.5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 rounded-full h-2" style={{ width: '98.5%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
              <span className="font-semibold text-green-600">4.8/5.0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 rounded-full h-2" style={{ width: '96%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Avg Fuel Efficiency</span>
              <span className="font-semibold text-primary">12.5 km/L</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
