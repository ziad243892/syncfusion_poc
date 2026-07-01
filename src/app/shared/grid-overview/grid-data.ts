export type GridStatusKey = 'active' | 'inactive';
export type GridTrustKey = 'perfect' | 'sufficient' | 'insufficient';
export type GridEmployeeImg = 'usermale' | 'userfemale';

export interface GridOverviewRecord {
  EmployeeID: number;
  EmployeesEn: string;
  EmployeesAr: string;
  DesignationEn: string;
  DesignationAr: string;
  LocationEn: string;
  LocationAr: string;
  StatusKey: GridStatusKey;
  TrustworthinessKey: GridTrustKey;
  Rating: number;
  Software: number;
  EmployeeImg: GridEmployeeImg;
  CurrentSalary: number;
  AddressEn: string;
  AddressAr: string;
  Mail: string;
}

export interface GridOverviewRow {
  EmployeeID: number;
  Employees: string;
  Designation: string;
  Location: string;
  Status: string;
  StatusKey: GridStatusKey;
  Trustworthiness: string;
  TrustworthinessKey: GridTrustKey;
  Rating: number;
  Software: number;
  EmployeeImg: GridEmployeeImg;
  CurrentSalary: number;
  Address: string;
  Mail: string;
}

const employeesEn = [
  'Michael',
  'Kathryn',
  'Tamer',
  'Martin',
  'Nancy',
  'Margaret',
  'Janet',
  'Andrew',
  'Laura',
  'Anne',
  'Zachery',
  'Jack',
  'Rose',
];

const employeesAr = [
  'محمد',
  'فاطمة',
  'عمر',
  'مارتن',
  'نورة',
  'مريم',
  'جنى',
  'أندرو',
  'ليلى',
  'آنا',
  'زكريا',
  'جاك',
  'روز',
];

const designationsEn = [
  'Manager',
  'CFO',
  'Designer',
  'Developer',
  'Program Director',
  'System Analyst',
  'Project Lead',
];

const designationsAr = [
  'مدير',
  'مدير مالي',
  'مصمم',
  'مطور',
  'مدير البرامج',
  'محلل أنظمة',
  'قائد مشروع',
];

const locationsEn = ['UK', 'USA', 'Sweden', 'France', 'Canada', 'Argentina', 'Austria', 'Germany', 'Mexico'];
const locationsAr = [
  'المملكة المتحدة',
  'الولايات المتحدة',
  'السويد',
  'فرنسا',
  'كندا',
  'الأرجنتين',
  'النمسا',
  'ألمانيا',
  'المكسيك',
];

const addressesEn = [
  '59 rue de lAbbaye',
  'Luisenstr. 48',
  'Rua do Paco, 67',
  '2, rue du Commerce',
  'Hauptstr. 31',
  'Kirchgasse 6',
  '2817 Milton Dr.',
];

const addressesAr = [
  '59 شارع الأبي',
  'لويزنstraße 48',
  'روا دو باكو، 67',
  '2، شارع التجارة',
  'هاوبتstraße 31',
  'كيرشغاسه 6',
  '2817 ميلتون درايف',
];

const mailDomains = ['sample.com', 'arpy.com', 'rpy.com', 'mail.com', 'jourrapide.com'];
const statusKeys: GridStatusKey[] = ['active', 'inactive'];
const trustKeys: GridTrustKey[] = ['perfect', 'sufficient', 'insufficient'];
const employeeImages: GridEmployeeImg[] = ['usermale', 'userfemale'];

function pick<T>(items: T[], employeeId: number, salt: number): T {
  return items[(employeeId * 37 + salt) % items.length];
}

/**
 * Generates deterministic bilingual overview data for the grid.
 */
export function getTradeData(dataCount = 1000): GridOverviewRecord[] {
  const records: GridOverviewRecord[] = [];

  for (let i = 1; i <= dataCount; i++) {
    const employeeId = 10000 + i;
    const firstNameEn = pick(employeesEn, employeeId, 1);
    const lastNameEn = pick(employeesEn, employeeId, 2);
    const firstNameAr = pick(employeesAr, employeeId, 3);
    const lastNameAr = pick(employeesAr, employeeId, 4);
    const employeeNameEn = `${firstNameEn} ${lastNameEn}`;
    const employeeNameAr = `${firstNameAr} ${lastNameAr}`;
    const mailPrefix = firstNameEn.toLowerCase();

    records.push({
      EmployeeID: employeeId,
      EmployeesEn: employeeNameEn,
      EmployeesAr: employeeNameAr,
      DesignationEn: pick(designationsEn, employeeId, 5),
      DesignationAr: pick(designationsAr, employeeId, 5),
      LocationEn: pick(locationsEn, employeeId, 6),
      LocationAr: pick(locationsAr, employeeId, 6),
      StatusKey: pick(statusKeys, employeeId, 7),
      TrustworthinessKey: pick(trustKeys, employeeId, 8),
      Rating: (employeeId * 3) % 5,
      Software: (employeeId * 17) % 100,
      EmployeeImg: pick(employeeImages, employeeId, 9),
      CurrentSalary: ((employeeId * 913) % 100000) + 25000,
      AddressEn: pick(addressesEn, employeeId, 10),
      AddressAr: pick(addressesAr, employeeId, 10),
      Mail: `${mailPrefix}${(employeeId % 90) + 10}@${pick(mailDomains, employeeId, 11)}`,
    });
  }

  return records;
}

export function toGridOverviewRow(
  record: GridOverviewRecord,
  isArabic: boolean,
  labels: {
    status: Record<GridStatusKey, string>;
    trustworthiness: Record<GridTrustKey, string>;
  },
): GridOverviewRow {
  return {
    EmployeeID: record.EmployeeID,
    Employees: isArabic ? record.EmployeesAr : record.EmployeesEn,
    Designation: isArabic ? record.DesignationAr : record.DesignationEn,
    Location: isArabic ? record.LocationAr : record.LocationEn,
    Status: labels.status[record.StatusKey],
    StatusKey: record.StatusKey,
    Trustworthiness: labels.trustworthiness[record.TrustworthinessKey],
    TrustworthinessKey: record.TrustworthinessKey,
    Rating: record.Rating,
    Software: record.Software,
    EmployeeImg: record.EmployeeImg,
    CurrentSalary: record.CurrentSalary,
    Address: isArabic ? record.AddressAr : record.AddressEn,
    Mail: record.Mail,
  };
}
