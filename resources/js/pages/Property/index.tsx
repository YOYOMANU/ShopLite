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
import property from '@/routes/property';
import { BreadcrumbItem, PaginatedCollection, Property } from '@/types';
import { Form, Link } from '@inertiajs/react';
import { EditIcon, PlusIcon, TrashIcon } from 'lucide-react';

const Breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Biens',
        href: property.index().url,
    },
];

type Props = {
    collection: PaginatedCollection<Property>;
    q: string;
};

export default withAppLayout(Breadcrumbs, ({ collection, q }: Props) => {
    console.log(collection);

    return (
        <div className="space-y-4">
            <TopAction>
                <Form
                    {...property.index.form}
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
                        <TableHead></TableHead>
                        <SortableTableHead field="title">Nom</SortableTableHead>
                        <SortableTableHead field="Option">
                            Option
                        </SortableTableHead>
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
                                <Link href={property.create()}>
                                    <PlusIcon />
                                    Ajouter un bien
                                </Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                    {collection.data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt=""
                                        className="rouded-lg aspect-square w-20 object-cover"
                                    />
                                ) : (
                                    <div className="aspect-square size-20 bg-background"></div>
                                )}
                            </TableCell>
                            <TableCell>
                                <Link
                                    href={property.edit({
                                        property: parseInt(item.id),
                                    })}
                                    className="hover:underline"
                                >
                                    {item.title}
                                </Link>
                            </TableCell>
                            <TableCell>
                                {(item.options ?? item.Option ?? []).map(
                                    (opt: any, idx: number) => (
                                        <span
                                            key={opt.id ?? opt.value ?? idx}
                                            className="mr-2 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800"
                                        >
                                            {opt.name ??
                                                opt.label ??
                                                String(opt)}
                                        </span>
                                    ),
                                )}
                            </TableCell>
                            <TableCell>
                                <div className="item-center flex justify-end gap-2">
                                    <Button
                                        asChild
                                        size="icon"
                                        variant="outline"
                                    >
                                        <Link
                                            href={property.edit({
                                                property: parseInt(item.id),
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
                                            href={property.destroy({
                                                property: parseInt(item.id),
                                            })}
                                            onBefore={() =>
                                                confirm(
                                                    'Voulez vous vraiment supprimer ce bien ?',
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
