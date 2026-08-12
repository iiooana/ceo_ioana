import { Link, usePage } from '@inertiajs/react';

const navigation = [
    { name: 'Dashboard', href: '/' },
    { name: 'Activities', href: '/activities' },
    { name: 'Habits', href: '/habits'}
];

export default function AppLayout({ children }) {
    const { url } = usePage();

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex flex-shrink-0 items-center font-semibold text-gray-900">
                                {import.meta.env.VITE_APP_NAME ?? 'App'}
                            </div>
                            <div className="flex space-x-4 sm:ml-6">
                                {navigation.map((item) => {
                                    const isActive = ( item.name.toLowerCase() !== 'dashboard' && url !== "/" && url.startsWith(item.href) ) || (url === "/" && item.name.toLowerCase() === 'dashboard') ;

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                                                isActive
                                                    ? 'text-gray-900 border-b-2 border-indigo-500'
                                                    : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
    );
}
