import { CreateMenuItemSkeleton } from "@/components/Skeletons";

export default function WaitingScreen() {
    return (
        <CreateMenuItemSkeleton isLoading={true} colorMode={'light'}/>
    );
}
