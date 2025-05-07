// Mock data for the dashboard charts

// Line chart data - Trend Chart of Appointments Applied
export const appointmentTrendData = {
  labels: ['29/7/24', '30/7/24', '31/7/24', '1/8/24', '2/8/24', '3/8/24', '4/8/24'],
  values: [20, 25, 18, 30, 22, 28, 35]
};

// Pie chart data - Supplier Categorization
export const supplierCategorization = [
  { label: 'Attended the Appointment', value: 65, color: '#FF3B30' },
  { label: 'Did not attend the Appointment', value: 35, color: '#FFCC00' }
];

// Pie chart data - Week's Appointments Categorized
export const weekAppointments = [
  { label: 'Appointment Opened', value: 30, color: '#0066CC' },
  { label: 'Maintenance Queue', value: 25, color: '#FF9500' },
  { label: 'Quick Check Queue', value: 20, color: '#34C759' },
  { label: 'Workshop Queue', value: 25, color: '#FFCC00' }
];

// Bar chart data - 7 Days Normal Trend of Each Vehicle
export const vehicleTrendData = {
  labels: ['28/07/24', '29/07/24', '30/07/24', '31/07/24', '01/08/24', '02/08/24', '03/08/24'],
  datasets: [
    {
      label: 'Truck',
      data: [15, 10, 12, 8, 14, 9, 11],
      backgroundColor: '#0066CC',
    },
    {
      label: 'Trailer',
      data: [8, 12, 10, 15, 9, 11, 13],
      backgroundColor: '#FFCC00',
    },
    {
      label: 'Tempo',
      data: [5, 7, 9, 6, 8, 10, 7],
      backgroundColor: '#FF3B30',
    },
    {
      label: 'Van',
      data: [10, 8, 7, 12, 9, 11, 14],
      backgroundColor: '#34C759',
    }
  ]
};

// Horizontal bar chart data - Dates when maximum appointments were taken
export const maxAppointmentDates = {
  labels: ['01/08/2024', '31/07/2024', '30/07/2024', '29/07/2024', '28/07/2024', '27/07/2024', '26/07/2024'],
  datasets: [
    {
      label: 'Number of Appointments',
      data: [45, 38, 32, 25, 18, 15, 12],
      backgroundColor: '#FF3B30',
    }
  ]
};

// Filter categories
export const filterCategories = [
  { id: 'queues', label: 'Queues Categorization' },
  { id: 'supplier', label: 'Supplier' },
  { id: 'operator', label: 'Operator' },
  { id: 'turn-around', label: 'Turn-Around Time' }
];