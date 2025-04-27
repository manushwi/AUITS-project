import { useState } from 'react';
import { Calendar, Clock, Package, User, Plus, X, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sample data for solar panel services
const initialAppointments = [
  { id: 1, service: "Solar Panel Installation", date: "2025-05-01", time: "10:00 AM", status: "Upcoming" },
  { id: 2, service: "Maintenance Check", date: "2025-05-15", time: "2:30 PM", status: "Upcoming" },
  { id: 3, service: "System Review", date: "2025-04-20", time: "11:00 AM", status: "Completed" }
];

const initialOrders = [
  { id: 101, items: ["Solar Panels (6 units)", "Inverter"], date: "2025-04-25", total: "$4,200.00", status: "Processing" },
  { id: 102, items: ["Mounting Equipment"], date: "2025-04-10", total: "$845.50", status: "Delivered" }
];

const serviceOptions = [
  "Solar Panel Installation",
  "Maintenance Check",
  "System Review",
  "Panel Cleaning",
  "Inverter Inspection"
];

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

export default function UserDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointments, setAppointments] = useState(initialAppointments);
  const [orders, setOrders] = useState(initialOrders);
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  // New appointment form state
  const [newAppointment, setNewAppointment] = useState({
    service: serviceOptions[0],
    date: "",
    time: timeSlots[0]
  });

  // Handle booking form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({
      ...newAppointment,
      [name]: value
    });
  };

  // Handle booking form submission
  const handleBookAppointment = (e) => {
    e.preventDefault();
    const appointment = {
      id: appointments.length + 10,
      ...newAppointment,
      status: "Upcoming"
    };
    setAppointments([appointment, ...appointments]);
    setShowBookingModal(false);
  };

  // Handle appointment cancellation
  const handleCancelAppointment = (id) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
  };

  // Handle logout and redirect to home page
  const handleLogout = () => {
    // Here you would typically clear any authentication tokens/cookies
    // For example: localStorage.removeItem('authToken');
    
    // Redirect to the home page
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Solar Service Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <User size={18} />
              John Doe
            </span>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded text-sm"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button 
            onClick={() => setActiveTab('appointments')}
            className={`mr-4 py-2 px-1 ${activeTab === 'appointments' 
              ? 'border-b-2 border-red-600 text-red-600 font-medium' 
              : 'text-gray-600 hover:text-red-500'}`}
          >
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>Appointments</span>
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`py-2 px-1 ${activeTab === 'orders' 
              ? 'border-b-2 border-red-600 text-red-600 font-medium' 
              : 'text-gray-600 hover:text-red-500'}`}
          >
            <div className="flex items-center gap-2">
              <Package size={18} />
              <span>Orders</span>
            </div>
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h2 className="text-lg font-medium mb-4">Quick Actions</h2>
              <button 
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2"
              >
                <Plus size={16} />
                Schedule Service
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-medium mb-4">System Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>System Size</span>
                  <span className="font-medium">5.6 kW</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>Installation Date</span>
                  <span className="font-medium">Oct 15, 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2">
            {activeTab === 'appointments' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium">My Appointments</h2>
                </div>
                
                {appointments.length > 0 ? (
                  <div className="space-y-4">
                    {appointments.map(appointment => (
                      <div key={appointment.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{appointment.service}</h3>
                            <div className="flex items-center text-sm text-gray-600 mt-1 gap-4">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {appointment.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={14} />
                                {appointment.time}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm px-2 py-1 rounded ${
                              appointment.status === "Upcoming" ? 
                              "bg-green-100 text-green-800" : 
                              "bg-gray-100 text-gray-800"
                            }`}>
                              {appointment.status}
                            </span>
                            {appointment.status === "Upcoming" && (
                              <button 
                                onClick={() => handleCancelAppointment(appointment.id)}
                                className="text-gray-400 hover:text-red-500"
                              >
                                <X size={16} />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <p className="text-gray-500">No appointments found.</p>
                    <button 
                      onClick={() => setShowBookingModal(true)}
                      className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded inline-flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Book Your First Appointment
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium">My Orders</h2>
                </div>
                
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">Order #{order.id}</h3>
                              <span className={`text-xs px-2 py-1 rounded ${
                                order.status === "Processing" ? 
                                "bg-blue-100 text-blue-800" : 
                                "bg-green-100 text-green-800"
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {order.date}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{order.total}</div>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="text-sm text-gray-600">Items: {order.items.join(", ")}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <p className="text-gray-500">No orders found.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">Book Appointment</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleBookAppointment} className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={newAppointment.service}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    {serviceOptions.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={newAppointment.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time
                  </label>
                  <select
                    name="time"
                    value={newAppointment.time}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  >
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}