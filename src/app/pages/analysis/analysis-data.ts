/** Monthly revenue used by the line and area chart demos. */
export const MONTHLY_REVENUE = [
  { month: 'Jan', revenue: 42, target: 38 },
  { month: 'Feb', revenue: 48, target: 40 },
  { month: 'Mar', revenue: 51, target: 45 },
  { month: 'Apr', revenue: 47, target: 44 },
  { month: 'May', revenue: 58, target: 50 },
  { month: 'Jun', revenue: 62, target: 52 },
  { month: 'Jul', revenue: 59, target: 55 },
  { month: 'Aug', revenue: 71, target: 58 },
  { month: 'Sep', revenue: 66, target: 60 },
  { month: 'Oct', revenue: 74, target: 63 },
  { month: 'Nov', revenue: 69, target: 65 },
  { month: 'Dec', revenue: 78, target: 68 },
];

/** Department headcount for the bar chart demo. */
export const DEPARTMENT_HEADCOUNT = [
  { department: 'Engineering', headcount: 48 },
  { department: 'Sales', headcount: 32 },
  { department: 'Marketing', headcount: 18 },
  { department: 'Support', headcount: 24 },
  { department: 'Finance', headcount: 14 },
  { department: 'HR', headcount: 10 },
];

/** OHLC sample data for the stock chart demo. */
export const STOCK_PRICES = [
  { date: new Date(2025, 0, 2), open: 182.4, high: 186.2, low: 180.1, close: 185.3 },
  { date: new Date(2025, 0, 3), open: 185.3, high: 188.9, low: 183.5, close: 187.1 },
  { date: new Date(2025, 0, 6), open: 187.1, high: 190.4, low: 185.8, close: 189.6 },
  { date: new Date(2025, 0, 7), open: 189.6, high: 191.2, low: 186.4, close: 187.8 },
  { date: new Date(2025, 0, 8), open: 187.8, high: 192.5, low: 186.9, close: 191.4 },
  { date: new Date(2025, 0, 9), open: 191.4, high: 194.1, low: 189.7, close: 190.2 },
  { date: new Date(2025, 0, 10), open: 190.2, high: 193.8, low: 188.5, close: 192.7 },
  { date: new Date(2025, 0, 13), open: 192.7, high: 196.3, low: 191.2, close: 195.1 },
  { date: new Date(2025, 0, 14), open: 195.1, high: 198.4, low: 193.6, close: 194.8 },
  { date: new Date(2025, 0, 15), open: 194.8, high: 197.2, low: 191.9, close: 193.5 },
  { date: new Date(2025, 0, 16), open: 193.5, high: 196.8, low: 192.1, close: 196.2 },
  { date: new Date(2025, 0, 17), open: 196.2, high: 199.5, low: 194.7, close: 198.9 },
];

/** Scatter and bubble data for performance analysis. */
export const PERFORMANCE_DATA = [
  { experience: 1, score: 62, teamSize: 4 },
  { experience: 2, score: 68, teamSize: 6 },
  { experience: 3, score: 71, teamSize: 8 },
  { experience: 4, score: 74, teamSize: 10 },
  { experience: 5, score: 78, teamSize: 12 },
  { experience: 6, score: 81, teamSize: 14 },
  { experience: 7, score: 84, teamSize: 16 },
  { experience: 8, score: 88, teamSize: 18 },
  { experience: 9, score: 90, teamSize: 20 },
  { experience: 10, score: 93, teamSize: 22 },
];

/** Market share breakdown for the accumulation (pie) chart demo. */
export const MARKET_SHARE = [
  { segment: 'Enterprise', share: 38 },
  { segment: 'Mid-Market', share: 27 },
  { segment: 'SMB', share: 21 },
  { segment: 'Public Sector', share: 14 },
];

/** KPI summary cards shown at the top of the dashboard. */
export const ANALYSIS_KPIS = [
  { labelKey: 'analysis.kpis.revenue', value: '$4.2M', trend: '+12%' },
  { labelKey: 'analysis.kpis.users', value: '18.4K', trend: '+8%' },
  { labelKey: 'analysis.kpis.conversion', value: '3.6%', trend: '+0.4%' },
  { labelKey: 'analysis.kpis.retention', value: '94%', trend: '+2%' },
];
