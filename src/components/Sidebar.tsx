import {HomeIcon} from "./icon/HomeIcon";
import {UserIcon} from "./icon/UserIcon";
import {BookIcon} from "./icon/BookIcon";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 overflow-auto bg-gray-100 dark:bg-gray-800">
      <nav className="flex flex-col items-start gap-6 p-4">
        <a
          className="flex items-center gap-4 text-gray-900 dark:text-gray-50"
          href="/dashboard"
        >
          <HomeIcon />
          <span className="font-medium">Dashboard</span>
        </a>
        <a
          className="flex items-center gap-4 text-gray-500 dark:text-gray-400"
          href="/profile"
        >
          <UserIcon />
          <span className="font-medium">Profile</span>
        </a>
        <a
          className="flex items-center gap-4 text-gray-500 dark:text-gray-400"
          href="courses"
        >
          <BookIcon />
          <span className="font-medium">Courses</span>
        </a>
      </nav>
    </div>
  );
}
