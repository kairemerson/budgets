import { TouchableOpacity, View } from "react-native"
import { Status } from "@/types/Status"
import { TAgStatus } from "../TagStatus"

type Props = {
  status: Status | null
  selected: boolean
  onPress: () => void
}

export function StatusCheckbox({ status, selected, onPress }: Props) {
    
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/* Checkbox */} 
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: selected ? "#6D28D9" : "#D1D5DB",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {selected && (
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: "#6D28D9",
              borderRadius: 2,
            }}
          />
        )}
      </View>

      {/* Seu badge existente */} 
      <TAgStatus status={status!} />
    </TouchableOpacity>
  )
}
