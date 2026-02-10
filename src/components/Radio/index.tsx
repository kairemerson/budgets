import { TouchableOpacity, View, Text } from "react-native"

type Props = {
  label: string
  selected: boolean
  onPress: () => void
}

export function Radio({ label, selected, onPress }: Props) {
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
      {/* Círculo externo */}
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: selected ? "#6D28D9" : "#D1D5DB",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Círculo interno */}
        {selected && (
          <View
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#6D28D9",
            }}
          />
        )}
      </View>

      <Text
        style={{
          fontSize: 14,
          color: "#111827",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
