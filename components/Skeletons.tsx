import React from 'react'
import { StyleSheet } from "react-native";
import { MotiView } from 'moti'
import { Skeleton } from 'moti/skeleton'

interface SkeletonProps {
    isLoading: boolean;
    colorMode: 'light' | 'dark';
}

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />

export function CreateMenuItemSkeleton({ isLoading, colorMode }: SkeletonProps) {
    return (
        <MotiView
            transition={{
                type: 'timing',
            }}
            style={[styles.container, styles.padded]}
            animate={{ backgroundColor: colorMode === 'dark' ? '#18181b' : '#ffffff' }}
        >
            <Skeleton.Group show={isLoading}>
                <Skeleton colorMode={colorMode} width={'50%'} height={150} />
                <Spacer />
                <Skeleton colorMode={colorMode} width={'100%'} />
                <Spacer />
                <Skeleton colorMode={colorMode} width={'100%'} />
                <Spacer />
                <Skeleton colorMode={colorMode} width={'100%'} height={'30%'} />
                <Spacer />
            </Skeleton.Group>
        </MotiView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    padded: {
        padding: 16,
    },
})