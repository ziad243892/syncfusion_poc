export type AssigneeImg = 'usermale' | 'userfemale';
export type TaskStatusKey = 'notStarted' | 'inProgress' | 'completed' | 'onHold';
export type ResourceTypeKey = 'design' | 'development' | 'qa' | 'management';
export type RiskKey = 'low' | 'medium' | 'high';
export type TrustKey = 'perfect' | 'sufficient' | 'insufficient';

/** Hierarchical task row used by the Syncfusion TreeGrid overview demo. */
export interface TreeTask {
  taskID: number;
  /** Outline number shown in the grid: 1, 1.1, 1.2, 2, 2.1, … */
  skNumber?: string;
  taskName: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  progress: number;
  priority: 'Low' | 'Normal' | 'High' | 'Critical';
  approved: boolean;
  isInExpandState?: boolean;
  assignee?: string;
  assigneeImg?: AssigneeImg;
  department?: string;
  location?: string;
  statusKey?: TaskStatusKey;
  rating?: number;
  budget?: number;
  resourceTypeKey?: ResourceTypeKey;
  resourceImg?: string;
  trustKey?: TrustKey;
  trustImg?: string;
  riskKey?: RiskKey;
  mail?: string;
  subtasks?: TreeTask[];
}

export type TreeDepthLevel = 1 | 2 | 3 | 4;

const ASSIGNEES_EN = [
  'Michael', 'Kathryn', 'Tamer', 'Martin', 'Nancy', 'Margaret', 'Janet', 'Andrew', 'Laura', 'Anne',
];
const ASSIGNEES_AR = [
  'محمد', 'فاطمة', 'عمر', 'مارتن', 'نورة', 'مريم', 'جنى', 'أندرو', 'ليلى', 'آنا',
];
const DEPARTMENTS_EN = ['Planning', 'Design', 'Engineering', 'QA', 'Operations', 'Finance'];
const DEPARTMENTS_AR = ['التخطيط', 'التصميم', 'الهندسة', 'ضمان الجودة', 'العمليات', 'المالية'];
const LOCATIONS_EN = ['New York', 'London', 'Dubai', 'Riyadh', 'Berlin', 'Singapore'];
const LOCATIONS_AR = ['نيويورك', 'لندن', 'دبي', 'الرياض', 'برلين', 'سنغافورة'];

const STATUS_KEYS: TaskStatusKey[] = ['notStarted', 'inProgress', 'completed', 'onHold'];
const RESOURCE_KEYS: ResourceTypeKey[] = ['design', 'development', 'qa', 'management'];
const RISK_KEYS: RiskKey[] = ['low', 'medium', 'high'];
const TRUST_KEYS: TrustKey[] = ['perfect', 'sufficient', 'insufficient'];
const ASSIGNEE_IMGS: AssigneeImg[] = ['usermale', 'userfemale'];

const IMAGE_ASSETS = {
  assigneeMale: '/assets/images/grid/user-male.svg',
  assigneeFemale: '/assets/images/grid/user-female.svg',
  map: '/assets/images/grid/Map.png',
  perfect: '/assets/images/grid/Perfect.png',
  sufficient: '/assets/images/grid/Sufficient.png',
  insufficient: '/assets/images/grid/Insufficient.png',
  resourceDesign: '/assets/images/grid/Sufficient.png',
  resourceDevelopment: '/assets/images/grid/Perfect.png',
  resourceQa: '/assets/images/grid/Insufficient.png',
  resourceManagement: '/assets/images/grid/Map.png',
} as const;

function pick<T>(items: T[], seed: number, offset = 0): T {
  return items[(seed + offset) % items.length];
}

/** Add demo metadata and image paths to each node in the hierarchy. */
function enrichTreeNode(task: TreeTask, isArabic: boolean): TreeTask {
  const seed = task.taskID;
  const assigneeImg = pick(ASSIGNEE_IMGS, seed);
  const resourceTypeKey = pick(RESOURCE_KEYS, seed, 2);
  const trustKey = pick(TRUST_KEYS, seed, 4);
  const progress = Number(task.progress) || 0;

  let statusKey: TaskStatusKey = 'inProgress';
  if (progress >= 100) {
    statusKey = 'completed';
  } else if (progress === 0) {
    statusKey = pick(STATUS_KEYS, seed) === 'onHold' ? 'onHold' : 'notStarted';
  }

  const resourceImgMap: Record<ResourceTypeKey, string> = {
    design: IMAGE_ASSETS.resourceDesign,
    development: IMAGE_ASSETS.resourceDevelopment,
    qa: IMAGE_ASSETS.resourceQa,
    management: IMAGE_ASSETS.resourceManagement,
  };

  const trustImgMap: Record<TrustKey, string> = {
    perfect: IMAGE_ASSETS.perfect,
    sufficient: IMAGE_ASSETS.sufficient,
    insufficient: IMAGE_ASSETS.insufficient,
  };

  const row: TreeTask = {
    ...task,
    assignee: isArabic ? pick(ASSIGNEES_AR, seed) : pick(ASSIGNEES_EN, seed),
    assigneeImg,
    department: isArabic ? pick(DEPARTMENTS_AR, seed, 1) : pick(DEPARTMENTS_EN, seed, 1),
    location: isArabic ? pick(LOCATIONS_AR, seed, 3) : pick(LOCATIONS_EN, seed, 3),
    statusKey,
    rating: (seed % 5) + 1,
    budget: 5000 + (seed % 12) * 1750,
    resourceTypeKey,
    resourceImg: resourceImgMap[resourceTypeKey],
    trustKey,
    trustImg: trustImgMap[trustKey],
    riskKey: pick(RISK_KEYS, seed, 5),
    mail: `task${seed}@company.com`,
  };

  if (row.subtasks?.length) {
    row.subtasks = row.subtasks.map((child) => enrichTreeNode(child, isArabic));
  }

  return row;
}

function enrichTreeData(data: TreeTask[], isArabic: boolean): TreeTask[] {
  return data.map((task) => enrichTreeNode(task, isArabic));
}

/** Assign hierarchical outline numbers: roots 1, 2, 3…; children 1.1, 1.2, 2.1, 2.2… */
function assignSkNumbers(tasks: TreeTask[], parentPrefix?: string): TreeTask[] {
  return tasks.map((task, index) => {
    const skNumber = parentPrefix ? `${parentPrefix}.${index + 1}` : String(index + 1);
    const row: TreeTask = { ...task, skNumber };

    if (row.subtasks?.length) {
      row.subtasks = assignSkNumbers(row.subtasks, skNumber);
    }

    return row;
  });
}

/** Apply i18n labels to task names so search/filter use the active language. */
export function localizeTaskNames(
  tasks: TreeTask[],
  translate: (key: string) => string,
): TreeTask[] {
  return tasks.map((task) => {
    const key = `treegrid.tasks.${task.taskID}`;
    const translated = translate(key);
    const row: TreeTask = {
      ...task,
      taskName: translated === key ? task.taskName : translated,
    };

    if (row.subtasks?.length) {
      row.subtasks = localizeTaskNames(row.subtasks, translate);
    }

    return row;
  });
}

/** Official Syncfusion TreeGrid sample data — up to four nesting levels. */
export const TREE_GRID_SAMPLE_DATA: TreeTask[] = [
  {
    taskID: 1,
    taskName: 'Planning',
    startDate: new Date('02/03/2017'),
    endDate: new Date('02/07/2017'),
    progress: 100,
    duration: 5,
    priority: 'Normal',
    approved: false,
    isInExpandState: true,
    subtasks: [
      {
        taskID: 2,
        taskName: 'Plan timeline',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        duration: 5,
        progress: 100,
        priority: 'Normal',
        approved: false,
      },
      {
        taskID: 3,
        taskName: 'Plan budget',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        duration: 5,
        progress: 100,
        priority: 'Low',
        approved: true,
      },
      {
        taskID: 4,
        taskName: 'Allocate resources',
        startDate: new Date('02/03/2017'),
        endDate: new Date('02/07/2017'),
        duration: 5,
        progress: 100,
        priority: 'Critical',
        approved: false,
      },
      {
        taskID: 5,
        taskName: 'Planning complete',
        startDate: new Date('02/07/2017'),
        endDate: new Date('02/07/2017'),
        duration: 0,
        progress: 0,
        priority: 'Low',
        approved: true,
      },
    ],
  },
  {
    taskID: 6,
    taskName: 'Design',
    startDate: new Date('02/10/2017'),
    endDate: new Date('02/14/2017'),
    duration: 3,
    progress: 86,
    priority: 'High',
    isInExpandState: false,
    approved: false,
    subtasks: [
      {
        taskID: 7,
        taskName: 'Software Specification',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/12/2017'),
        duration: 3,
        progress: 60,
        priority: 'Normal',
        approved: false,
      },
      {
        taskID: 8,
        taskName: 'Develop prototype',
        startDate: new Date('02/10/2017'),
        endDate: new Date('02/12/2017'),
        duration: 3,
        progress: 100,
        priority: 'Critical',
        approved: false,
      },
      {
        taskID: 9,
        taskName: 'Get approval from customer',
        startDate: new Date('02/13/2017'),
        endDate: new Date('02/14/2017'),
        duration: 2,
        progress: 100,
        priority: 'High',
        approved: true,
      },
      {
        taskID: 10,
        taskName: 'Design Documentation',
        startDate: new Date('02/13/2017'),
        endDate: new Date('02/14/2017'),
        duration: 2,
        progress: 100,
        priority: 'Normal',
        approved: true,
      },
      {
        taskID: 11,
        taskName: 'Design complete',
        startDate: new Date('02/14/2017'),
        endDate: new Date('02/14/2017'),
        duration: 0,
        progress: 0,
        priority: 'Normal',
        approved: true,
      },
    ],
  },
  {
    taskID: 12,
    taskName: 'Implementation Phase',
    startDate: new Date('02/17/2017'),
    endDate: new Date('02/27/2017'),
    priority: 'Normal',
    approved: false,
    duration: 11,
    progress: 50,
    subtasks: [
      {
        taskID: 13,
        taskName: 'Phase 1',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'High',
        approved: false,
        duration: 11,
        progress: 40,
        subtasks: [
          {
            taskID: 14,
            taskName: 'Implementation Module 1',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/27/2017'),
            priority: 'Normal',
            duration: 11,
            progress: 30,
            approved: false,
            subtasks: [
              {
                taskID: 15,
                taskName: 'Development Task 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/19/2017'),
                duration: 3,
                progress: 50,
                priority: 'High',
                approved: false,
              },
              {
                taskID: 16,
                taskName: 'Development Task 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/19/2017'),
                duration: 3,
                progress: 50,
                priority: 'Low',
                approved: true,
              },
              {
                taskID: 17,
                taskName: 'Testing',
                startDate: new Date('02/20/2017'),
                endDate: new Date('02/21/2017'),
                duration: 2,
                progress: 0,
                priority: 'Normal',
                approved: true,
              },
              {
                taskID: 18,
                taskName: 'Bug fix',
                startDate: new Date('02/24/2017'),
                endDate: new Date('02/25/2017'),
                duration: 2,
                progress: 0,
                priority: 'Critical',
                approved: false,
              },
              {
                taskID: 19,
                taskName: 'Customer review meeting',
                startDate: new Date('02/26/2017'),
                endDate: new Date('02/27/2017'),
                duration: 2,
                progress: 0,
                priority: 'High',
                approved: false,
              },
              {
                taskID: 20,
                taskName: 'Phase 1 complete',
                startDate: new Date('02/27/2017'),
                endDate: new Date('02/27/2017'),
                duration: 0,
                progress: 0,
                priority: 'Low',
                approved: true,
              },
            ],
          },
        ],
      },
      {
        taskID: 21,
        taskName: 'Phase 2',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/28/2017'),
        priority: 'High',
        approved: false,
        duration: 12,
        progress: 35,
        subtasks: [
          {
            taskID: 22,
            taskName: 'Implementation Module 2',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/28/2017'),
            priority: 'Critical',
            approved: false,
            duration: 12,
            progress: 25,
            subtasks: [
              {
                taskID: 23,
                taskName: 'Development Task 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/20/2017'),
                duration: 4,
                progress: 50,
                priority: 'Normal',
                approved: true,
              },
              {
                taskID: 24,
                taskName: 'Development Task 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/20/2017'),
                duration: 4,
                progress: 50,
                priority: 'Critical',
                approved: true,
              },
              {
                taskID: 25,
                taskName: 'Testing',
                startDate: new Date('02/21/2017'),
                endDate: new Date('02/24/2017'),
                duration: 2,
                progress: 0,
                priority: 'High',
                approved: false,
              },
              {
                taskID: 26,
                taskName: 'Bug fix',
                startDate: new Date('02/25/2017'),
                endDate: new Date('02/26/2017'),
                duration: 2,
                progress: 0,
                priority: 'Low',
                approved: false,
              },
              {
                taskID: 27,
                taskName: 'Customer review meeting',
                startDate: new Date('02/27/2017'),
                endDate: new Date('02/28/2017'),
                duration: 2,
                progress: 0,
                priority: 'Critical',
                approved: true,
              },
              {
                taskID: 28,
                taskName: 'Phase 2 complete',
                startDate: new Date('02/28/2017'),
                endDate: new Date('02/28/2017'),
                duration: 0,
                progress: 0,
                priority: 'Normal',
                approved: false,
              },
            ],
          },
        ],
      },
      {
        taskID: 29,
        taskName: 'Phase 3',
        startDate: new Date('02/17/2017'),
        endDate: new Date('02/27/2017'),
        priority: 'Normal',
        approved: false,
        duration: 11,
        progress: 20,
        subtasks: [
          {
            taskID: 30,
            taskName: 'Implementation Module 3',
            startDate: new Date('02/17/2017'),
            endDate: new Date('02/27/2017'),
            priority: 'High',
            approved: false,
            duration: 11,
            progress: 15,
            subtasks: [
              {
                taskID: 31,
                taskName: 'Development Task 1',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/19/2017'),
                duration: 3,
                progress: 50,
                priority: 'Low',
                approved: true,
              },
              {
                taskID: 32,
                taskName: 'Development Task 2',
                startDate: new Date('02/17/2017'),
                endDate: new Date('02/19/2017'),
                duration: 3,
                progress: 50,
                priority: 'Normal',
                approved: false,
              },
              {
                taskID: 33,
                taskName: 'Testing',
                startDate: new Date('02/20/2017'),
                endDate: new Date('02/21/2017'),
                duration: 2,
                progress: 0,
                priority: 'Critical',
                approved: true,
              },
              {
                taskID: 34,
                taskName: 'Bug fix',
                startDate: new Date('02/24/2017'),
                endDate: new Date('02/25/2017'),
                duration: 2,
                progress: 0,
                priority: 'High',
                approved: false,
              },
              {
                taskID: 35,
                taskName: 'Customer review meeting',
                startDate: new Date('02/26/2017'),
                endDate: new Date('02/27/2017'),
                duration: 2,
                progress: 0,
                priority: 'Normal',
                approved: true,
              },
              {
                taskID: 36,
                taskName: 'Phase 3 complete',
                startDate: new Date('02/27/2017'),
                endDate: new Date('02/27/2017'),
                duration: 0,
                progress: 0,
                priority: 'Critical',
                approved: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

/** Limit visible hierarchy depth (1 = roots only, 4 = full tree). */
export function trimTreeDepth(data: TreeTask[], maxDepth: TreeDepthLevel, depth = 1): TreeTask[] {
  return data.map((task) => {
    const row: TreeTask = { ...task };

    if (depth >= maxDepth || !row.subtasks?.length) {
      delete row.subtasks;
      return row;
    }

    row.subtasks = trimTreeDepth(row.subtasks, maxDepth, depth + 1);
    return row;
  });
}

export function getTreeDataForDepth(depth: TreeDepthLevel, isArabic = false): TreeTask[] {
  const trimmed = trimTreeDepth(TREE_GRID_SAMPLE_DATA, depth);
  const enriched = enrichTreeData(trimmed, isArabic);
  return assignSkNumbers(enriched);
}

export function assigneeImage(img: AssigneeImg): string {
  return img === 'usermale' ? IMAGE_ASSETS.assigneeMale : IMAGE_ASSETS.assigneeFemale;
}

export const TREE_MAP_IMAGE = IMAGE_ASSETS.map;
