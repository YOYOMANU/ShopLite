'use client';

import { TrendingUp } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from 'recharts';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from '@/components/ui/chart';

export const description = 'A bar chart with an active bar';

const chartData = [
    { browser: 'chrome', visitors: 187, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 275, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
];

const chartConfig = {
    visitors: {
        label: 'interessé',
    },
    chrome: {
        label: 'Maison',
        color: 'var(--chart-1)',
    },
    safari: {
        label: 'Studio',
        color: 'var(--chart-2)',
    },
    firefox: {
        label: 'Villa',
        color: 'var(--chart-3)',
    },
    edge: {
        label: 'Terrain',
        color: 'var(--chart-4)',
    },
    other: {
        label: 'autres',
        color: 'var(--chart-5)',
    },
} satisfies ChartConfig;

export function ChartBarActive() {
    return (
        <Card>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="browser"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) =>
                                chartConfig[value as keyof typeof chartConfig]
                                    ?.label
                            }
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="visitors"
                            strokeWidth={2}
                            radius={8}
                            activeIndex={2}
                            activeBar={({ ...props }) => {
                                return (
                                    <Rectangle
                                        {...props}
                                        fillOpacity={0.8}
                                        stroke={props.payload.fill}
                                        strokeDasharray={4}
                                        strokeDashoffset={4}
                                    />
                                );
                            }}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                    En hausse de 5,2 % ce mois-ci
                    <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Répartition des types de biens
                </div>
            </CardFooter>
        </Card>
    );
}
