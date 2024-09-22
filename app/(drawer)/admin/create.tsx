import MenuItemScreen from "@/components/MenuItem";

export default function MenuScreen() {
  return (
    <MenuItemScreen
      isEditing={true}
      onSave={(item) => {
        // Handle saving the item here
        console.log(item);
      }}
    />
  );
}
