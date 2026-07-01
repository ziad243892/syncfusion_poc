export interface EmployeeRecord {
  id: number;
  name: string;
  nameAr: string;
  department: string;
  departmentAr: string;
  role: string;
  roleAr: string;
  status: 'active' | 'leave' | 'remote';
  email: string;
}

export interface ActivityItem {
  id: number;
  messageKey: string;
  timeKey: string;
}

export const EMPLOYEES: EmployeeRecord[] = [
  {
    id: 1,
    name: 'Sarah Al-Mansour',
    nameAr: 'سارة المنصور',
    department: 'Engineering',
    departmentAr: 'الهندسة',
    role: 'Frontend Lead',
    roleAr: 'قائدة الواجهة الأمامية',
    status: 'active',
    email: 'sarah.mansour@company.com',
  },
  {
    id: 2,
    name: 'Omar Hassan',
    nameAr: 'عمر حسن',
    department: 'Operations',
    departmentAr: 'العمليات',
    role: 'Operations Manager',
    roleAr: 'مدير العمليات',
    status: 'remote',
    email: 'omar.hassan@company.com',
  },
  {
    id: 3,
    name: 'Layla Karim',
    nameAr: 'ليلى كريم',
    department: 'Human Resources',
    departmentAr: 'الموارد البشرية',
    role: 'HR Specialist',
    roleAr: 'أخصائية موارد بشرية',
    status: 'active',
    email: 'layla.karim@company.com',
  },
  {
    id: 4,
    name: 'James Wilson',
    nameAr: 'جيمس ويلسون',
    department: 'Finance',
    departmentAr: 'المالية',
    role: 'Financial Analyst',
    roleAr: 'محلل مالي',
    status: 'leave',
    email: 'james.wilson@company.com',
  },
  {
    id: 5,
    name: 'Nour Al-Farsi',
    nameAr: 'نور الفارسي',
    department: 'Engineering',
    departmentAr: 'الهندسة',
    role: 'Backend Engineer',
    roleAr: 'مهندسة خلفية',
    status: 'active',
    email: 'nour.alfarsi@company.com',
  },
  {
    id: 6,
    name: 'Michael Chen',
    nameAr: 'مايكل تشين',
    department: 'Design',
    departmentAr: 'التصميم',
    role: 'Product Designer',
    roleAr: 'مصمم منتجات',
    status: 'remote',
    email: 'michael.chen@company.com',
  },
];

export const DEPARTMENTS = [
  { id: 'engineering', labelEn: 'Engineering', labelAr: 'الهندسة' },
  { id: 'operations', labelEn: 'Operations', labelAr: 'العمليات' },
  { id: 'hr', labelEn: 'Human Resources', labelAr: 'الموارد البشرية' },
  { id: 'finance', labelEn: 'Finance', labelAr: 'المالية' },
  { id: 'design', labelEn: 'Design', labelAr: 'التصميم' },
];

export const ROLES = [
  { id: 'lead', labelEn: 'Team Lead', labelAr: 'قائد فريق' },
  { id: 'manager', labelEn: 'Manager', labelAr: 'مدير' },
  { id: 'specialist', labelEn: 'Specialist', labelAr: 'أخصائي' },
  { id: 'engineer', labelEn: 'Engineer', labelAr: 'مهندس' },
];

export const RECENT_ACTIVITY: ActivityItem[] = [
  { id: 1, messageKey: 'Sarah updated the onboarding form', timeKey: '2h ago' },
  { id: 2, messageKey: 'Omar approved 3 leave requests', timeKey: '4h ago' },
  { id: 3, messageKey: 'Layla added 2 new employees', timeKey: 'Yesterday' },
  { id: 4, messageKey: 'Finance report exported', timeKey: 'Yesterday' },
];
