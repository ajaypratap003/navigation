import { ApiManagerPage, SecurePage } from 'threescale/pages';

const routes = [
  {
    path: "/",
    text: "Dashboard",
    component: ApiManagerPage,
    exact: true
  },
  {
    path: "/produce/design/*",
    section: 'produce',
    text: "Design",
    component: () => 'Nothing yet'
  },
  {
    path: "/produce/mock/*",
    section: 'produce',
    text: "Mock",
    component: () => 'Nothing yet'
  },
  {
    path: "/produce/test/*",
    section: 'produce',
    text: "Test",
    component: () => 'Nothing yet'
  },
  {
    path: "/produce/implement/*",
    section: 'produce',
    text: "Implement",
    component: () => 'Nothing yet'
  },
  {
    path: "/produce/deploy/*",
    section: 'produce',
    text: "Deploy",
    component: () => 'Nothing yet'
  },
  {
    path: "/produce/secure/*",
    section: 'produce',
    text: "Secure",
    component: SecurePage
  },
  {
    path: "/produce/manage/*",
    section: 'produce',
    text: "Manage",
    component: () => 'Nothing yet'
  },
  {
    path: "/consume/discover/*",
    section: 'consume',
    text: "Discover",
    component: () => 'Nothing yet'
  },
  {
    path: "/consume/develop/*",
    section: 'consume',
    text: "Develop",
    component: () => 'Nothing yet'
  },
  {
    path: "/consume/consume/*",
    section: 'consume',
    text: "Consume",
    component: () => 'Nothing yet'
  },
  {
    path: "/consume/monitor/*",
    section: 'consume',
    text: "Monitor",
    component: () => 'Nothing yet'
  },
  {
    path: "/consume/monetize/*",
    section: 'consume',
    text: "Monetize",
    component: () => 'Nothing yet'
  },
];

export default routes;
