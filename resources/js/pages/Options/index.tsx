import { SortableTableHead } from '@/components/sortable-table-head';
import { TopAction } from '@/components/top-action';
import { Button } from '@/components/ui/button';
import { CollectionPagination } from '@/components/ui/Collection-Pagination';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { withAppLayout } from '@/layouts/app-layout';
import options from '@/routes/options';
import { BreadcrumbItem, Option, PaginatedCollection } from '@/types';
import { Form, Link } from '@inertiajs/react';
import { EditIcon, PlusIcon, TrashIcon } from 'lucide-react';

const Breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Options',
        href: options.index().url,
    },
];

type Props = {
    collection: PaginatedCollection<Option>;
    q: string;
};

export default withAppLayout(Breadcrumbs, ({ collection, q }: Props) => {
    return (
        <div className="space-y-4">
            <TopAction>
                <Form
                    {...options.index.form}
                    className="flex items-center gap-1"
                >
                    <Input
                        placeholder="Rechercher..."
                        name="q"
                        defaultValue={q ?? ''}
                        autoFocus
                    />
                    <Button>Rechercher</Button>
                </Form>
            </TopAction>
            <Table>
                <TableHeader>
                    <TableRow>
                        <SortableTableHead field="id">ID</SortableTableHead>
                        <SortableTableHead field="name">Nom</SortableTableHead>
                        <TableHead className="text-end">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell colSpan={5}>
                            <Button
                                asChild
                                variant="outline"
                                className="w-full"
                            >
                                <Link href={options.create()}>
                                    <PlusIcon />
                                    Ajouter une Option
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                    {collection.data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                <Link
                                    href={options.edit({
                                        option: parseInt(item.id),
                                    })}
                                    className="hover:underline"
                                >
                                    {item.name}
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="item-center flex justify-end gap-2">
                                    <Button
                                        asChild
                                        size="icon"
                                        variant="outline"
                                    >
                                        <Link
                                            href={options.edit({
                                                option: parseInt(item.id),
                                            })}
                                        >
                                            <EditIcon size={16} />
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        size="icon"
                                        variant="destructive"
                                    >
                                        <Link
                                            href={options.destroy({
                                                option: parseInt(item.id),
                                            })}
                                            onBefore={() =>
                                                confirm(
                                                    'Voulez vous vraiment supprimer cet ingredient',
                                                )
                                            }
                                        >
                                            <TrashIcon size={16} />
                                        </Link>
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <CollectionPagination collection={collection} />
        </div>
    );
});
