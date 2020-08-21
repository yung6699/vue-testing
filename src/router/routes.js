import Home from "@/views/Home";
import NestedRoute from "@/views/NestedRoute";
export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: "/nested-route", component: NestedRoute }
];
