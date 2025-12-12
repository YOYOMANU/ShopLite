import { ChartAreaInteractive } from '@/components/chart-area-interactive';
import { ChartBarActive } from '@/components/chart-bar-active';
import { ChartBarLabelCustom } from '@/components/chart-bar-label-custom';
import { ChartPieDonutText } from '@/components/chart-pie-donut-Text';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative">
                        <PlaceholderPattern className="absolute inset-0 opacity-10" />
                        <ChartPieDonutText />
                    </div>

                    <div className="relative">
                        <PlaceholderPattern className="absolute inset-0 opacity-10" />
                        <ChartBarActive />
                    </div>
                    <div className="relative">
                        <PlaceholderPattern className="absolute inset-0 opacity-10" />
                        <ChartBarLabelCustom />
                    </div>
                </div>

                <div className="relative">
                    <PlaceholderPattern className="absolute inset-0 opacity-10" />
                    <ChartAreaInteractive />
                </div>
            </div>
        </AppLayout>
    );
}
