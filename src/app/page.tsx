export default function Home() {
  return (
    <div>
      <p className="text-gray-600 text-lg mb-4">
        Welcome back! Here&apos;s a quick overview of your teacher management system.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Total Teachers</p>
          <p className="text-xl font-bold text-gray-800">0</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Active Teachers</p>
          <p className="text-xl font-bold text-gray-800">0</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">New This Week</p>
          <p className="text-xl font-bold text-gray-800">0</p>
        </div>
      </div>
    </div>
  );
}
