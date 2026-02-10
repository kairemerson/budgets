import { Text, View } from "react-native"
import { useEffect, useState } from "react"
import { Status } from "@/types/Status"
import { StatusCheckbox } from "@/components/StatusCheckBox"
import { styles } from "./styles"
import { Button } from "@/components/Button"
import { Radio } from "@/components/Radio"
import CheckIcon from "@/assets/icons/check-white.svg"

type OrderBy = "recent" | "oldest" | "higher" | "lower"

type FiltersState = {
  status: Status[]
  orderBy: OrderBy
}

type Props = {
  value: FiltersState
  onApply: (filters: FiltersState) => void
}

export function Filters({ value, onApply }: Props) {
  const [selectedStatus, setSelectedStatus] = useState<Status[]>(value.status)
  const [orderBy, setOrderBy] = useState<OrderBy>(value.orderBy)

  function toggleStatus(status: Status) {
    setSelectedStatus((prev) =>
      prev.includes(status)
        ? prev.filter((item) => item !== status)
        : [...prev, status]
    )
  }

  function resetFilters() {
    setSelectedStatus([])
    setOrderBy("recent")
  }

  return (
    <View style={styles.container}>
        <View style={styles.statusContainer}>
            <Text style={styles.title}>Status</Text>
            {Object.values(Status).map((status) => (
                <StatusCheckbox
                    key={status}
                    status={status}
                    selected={selectedStatus.includes(status)}
                    onPress={() => toggleStatus(status)}
                />
            ))}
        </View>

        {/* ORDENAÇÃO */}
        <View style={styles.orderContainer}>
            <Text style={styles.title}>Ordenação</Text>

            <Radio
                label="Mais recente"
                selected={orderBy === "recent"}
                onPress={() => setOrderBy("recent")}
            />
            <Radio
                label="Mais antigo"
                selected={orderBy === "oldest"}
                onPress={() => setOrderBy("oldest")}
            />
            <Radio
                label="Maior valor"
                selected={orderBy === "higher"}
                onPress={() => setOrderBy("higher")}
            />
            <Radio
                label="Menor valor"
                selected={orderBy === "lower"}
                onPress={() => setOrderBy("lower")}
            />
        </View>

        <View style={styles.footer}>
            <Button
                variant="secondary"
                label="Resetar filtros"
                onPress={resetFilters}
            />
            <Button
            label="Aplicar"
            icon={CheckIcon}
            onPress={() =>
                onApply({
                status: selectedStatus,
                orderBy,
                })
            }
            />
        </View>
    </View>
  )
}
