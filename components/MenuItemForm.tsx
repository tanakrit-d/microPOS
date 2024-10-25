import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UUID, Item } from '@/app/api/item/types';
import { ItemSchema } from '@/app/api/item/schema';
import { getItem, updateItem } from '@/app/api/item/request';

export default function MenuItem(item_id: UUID) {

// Write functionality to support a scenario where an existing item is not provided.

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Item>({
        defaultValues: async () => {
            const response = await getItem(item_id)
            return response.data[0]
        },
        resolver: zodResolver(ItemSchema),
    })

    // const onSubmit = (data: Item) => console.log(JSON.stringify(data));
    const onSubmit = (data: Item) => updateItem(item_id, data);
    console.log(errors);

    return (
        <View>
            <Controller
                name={'title'}
                control={control}
                rules={{
                    required: true,
                    maxLength: 22,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="title"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        maxLength={22}
                    />
                )}
            />
            {errors.title && <Text>This is required.</Text>}


            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}