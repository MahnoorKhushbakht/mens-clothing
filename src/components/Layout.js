export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-950 min-h-screen flex justify-center items-center text-gray-300 bg-center bg-cover" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}>
      {children}
    </div>
  );
}
