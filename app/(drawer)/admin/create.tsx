import MenuItemScreen from "@/components/MenuItem";
import NewMenuItemScreen from "@/components/NewMenuItemScreen"

export default function MenuScreen() {
  return (
    // <MenuItemScreen
    //   isEditing={true}
    //   onSave={(item) => {
    //     // Handle saving the item here
    //     console.log(item);
    //   }}
    // />
    <NewMenuItemScreen
    isEditing={true}
    onSave={(item) => {
      // Handle saving the item here
      console.log(item);
    }}
  />
  );
}
