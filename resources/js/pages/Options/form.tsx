import { TopAction } from '@/components/top-action';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form-field';
import { ImageInput } from '@/components/ui/image-input';
import { Input } from '@/components/ui/input';
import { withAppLayout } from '@/layouts/app-layout';
import options from '@/routes/options';
import { BreadcrumbItem, type Option } from '@/types';
import { Form } from '@inertiajs/react';
import { SaveIcon } from 'lucide-react';

const Breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Options',
        href: options.index().url,
    },
    {
        title: 'Editer',
        href: '#',
    },
];

type Props = {
    option: Option;
};

function OptionEditPage({ option }: Props) {
    const action = option.id
        ? options.update.form({ option: parseInt(option.id) })
        : options.store.form();
    return (
        <Form {...action}>
            {({ errors, processing, progress }) => (
                <>
                    <FormField label="image" error={errors['image']}>
                        <ImageInput
                            progress={progress?.progress}
                            id="image"
                            className="aspect-square w-40"
                            name="image"
                            aria-invalid={!!errors['image']}
                            defaultValue={option.image}
                        />
                    </FormField>
                    <FormField htmlFor="name" label="name" error={errors.name}>
                        <Input
                            id="name"
                            name="name"
                            defaultValue={option.name}
                            aria-invalid={!!errors.name}
                        />
                    </FormField>
                    <TopAction>
                        <Button disabled={processing}>
                            <SaveIcon /> Enregistrer
                        </Button>
                    </TopAction>
                </>
            )}
        </Form>
    );
}

export default withAppLayout(Breadcrumbs, OptionEditPage);
