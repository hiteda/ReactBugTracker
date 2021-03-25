export default [
  { label: 'Summary', name: 'summary', type: 'text' },
  { label: 'Details', name: 'details', type: 'text' },
  { label: 'How Found', name: 'howFound', type: 'select', options: ['Functional Test', 'Unit Test', 'Exploratory Testing'] },
  { label: 'Severity', name: 'severity', type: 'select', options: ['Low', 'Moderate', 'High'] }
];