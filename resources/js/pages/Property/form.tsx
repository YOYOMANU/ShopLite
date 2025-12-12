import { TopAction } from '@/components/top-action';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormField } from '@/components/ui/form-field';
import { ImageInput } from '@/components/ui/image-input';
import { Input } from '@/components/ui/input';
import { withAppLayout } from '@/layouts/app-layout';
import property from '@/routes/property';
import { BreadcrumbItem, type Property } from '@/types';
import { Form } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';

const Breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Bien immobilier',
        href: property.index().url,
    },
    {
        title: 'Éditer',
        href: '#',
    },
];

type Props = {
    Property: Property;
    options?: { label: string; value: string }[];
    selectedOptions?: string[];
};

function PropertyEditPage({ Property, options, selectedOptions }: Props) {
    const action = Property.id
        ? property.update.form({ property: parseInt(Property.id) })
        : property.store.form();

    const defaultSelectedOptions: string[] =
        selectedOptions && selectedOptions.length
            ? selectedOptions
            : (Property as any).selectedOptions
              ? (Property as any).selectedOptions.map((s: any) => String(s))
              : [];

    return (
        <Form {...action}>
            {({ errors, processing, progress }) => (
                <>
                    {/* IMAGE */}
                    <FormField label="Image" error={errors['image']}>
                        <ImageInput
                            progress={progress?.progress}
                            id="image"
                            className="aspect-square w-40"
                            name="image"
                            aria-invalid={!!errors['image']}
                            defaultValue={Property.image}
                        />
                    </FormField>

                    {/* TITLE */}
                    <FormField
                        htmlFor="title"
                        label="Titre"
                        error={errors.title}
                    >
                        <Input
                            id="title"
                            name="title"
                            defaultValue={Property.title}
                            aria-invalid={!!errors.title}
                        />
                    </FormField>

                    {/* DESCRIPTION */}
                    <FormField
                        htmlFor="description"
                        label="Description"
                        error={errors.description}
                    >
                        <Input
                            id="description"
                            name="description"
                            defaultValue={Property.description}
                            aria-invalid={!!errors.description}
                        />
                    </FormField>

                    <div className="grid grid-cols-4 gap-4">
                        {/* SURFACE */}
                        <FormField
                            htmlFor="surface"
                            label="Surface"
                            error={errors.surface}
                        >
                            <Input
                                id="surface"
                                name="surface"
                                defaultValue={Property.surface}
                                aria-invalid={!!errors.surface}
                            />
                        </FormField>

                        {/* PIÈCES */}
                        <FormField
                            htmlFor="rooms"
                            label="Pièces"
                            error={errors.rooms}
                        >
                            <Input
                                id="rooms"
                                name="rooms"
                                defaultValue={Property.rooms}
                                aria-invalid={!!errors.rooms}
                            />
                        </FormField>

                        {/* CHAMBRES */}
                        <FormField
                            htmlFor="bedrooms"
                            label="Chambres"
                            error={errors.bedrooms}
                        >
                            <Input
                                id="bedrooms"
                                name="bedrooms"
                                defaultValue={Property.bedrooms}
                                aria-invalid={!!errors.bedrooms}
                            />
                        </FormField>

                        {/* ÉTAGE */}
                        <FormField
                            htmlFor="floor"
                            label="Étage"
                            error={errors.floor}
                        >
                            <Input
                                id="floor"
                                name="floor"
                                defaultValue={Property.floor}
                                aria-invalid={!!errors.floor}
                            />
                        </FormField>
                    </div>

                    {/* PRIX, VILLE, ADRESSE, CODE POSTAL sur 4 colonnes */}
                    <div className="grid grid-cols-4 gap-4">
                        {/* PRIX */}
                        <FormField
                            htmlFor="price"
                            label="Prix"
                            error={errors.price}
                        >
                            <Input
                                id="price"
                                name="price"
                                defaultValue={Property.price}
                                aria-invalid={!!errors.price}
                            />
                        </FormField>

                        {/* VILLE */}
                        <FormField
                            htmlFor="city"
                            label="Ville"
                            error={errors.city}
                        >
                            <Input
                                id="city"
                                name="city"
                                defaultValue={Property.city}
                                aria-invalid={!!errors.city}
                            />
                        </FormField>

                        {/* ADRESSE */}
                        <FormField
                            htmlFor="address"
                            label="Adresse"
                            error={errors.address}
                        >
                            <Input
                                id="address"
                                name="address"
                                defaultValue={Property.address}
                                aria-invalid={!!errors.address}
                            />
                        </FormField>

                        {/* CODE POSTAL */}
                        <FormField
                            htmlFor="postal_code"
                            label="Code postal"
                            error={errors.postal_code}
                        >
                            <Input
                                id="postal_code"
                                name="postal_code"
                                defaultValue={Property.postal_code}
                                aria-invalid={!!errors.postal_code}
                            />
                        </FormField>
                    </div>

                    {/* OPTIONS */}
                    <FormField
                        htmlFor="options"
                        label="Options"
                        error={errors.options}
                    >
                        <select
                            id="options"
                            name="options[]"
                            multiple
                            defaultValue={defaultSelectedOptions}
                            aria-invalid={!!errors.options}
                            className="block w-full rounded-xl border border-gray-300 bg-white/60 px-3 py-2 text-gray-700 shadow-sm backdrop-blur transition-all duration-200 hover:border-indigo-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none sm:text-sm"
                        >
                            {(options || []).map((opt) => (
                                <option
                                    key={opt.value}
                                    value={opt.value}
                                    className="py-2"
                                >
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    </FormField>

                    {/* SOLD */}
                    <FormField htmlFor="sold" error={errors.sold}>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="sold"
                                name="sold"
                                defaultChecked={Property.sold}
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                                htmlFor="sold"
                                className="font-medium text-gray-700"
                            >
                                En solde
                            </label>
                        </div>
                        {errors.sold && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.sold}
                            </p>
                        )}
                    </FormField>

                    {/* SUBMIT */}
                    <TopAction>
                        <Button disabled={processing}>
                            <SaveIcon className="mr-2 h-4 w-4" /> Enregistrer
                        </Button>
                    </TopAction>
                </>
            )}
        </Form>
    );
}

export default withAppLayout(Breadcrumbs, PropertyEditPage);
