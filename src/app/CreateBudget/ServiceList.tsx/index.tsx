import { FlatList } from 'react-native'
import { ServiceItem } from '@/app/CreateBudget/ServiceItem'
import { Service } from '@/types//Service'

type Props = {
  data: Service[]
  onEditItem?: (id: string) => void
}

export function ServiceList({ data, onEditItem }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ServiceItem
          id={item.id}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
          title={item.title}
          onEdit={() => onEditItem?.(item.id)}
        />
      )}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
    />
  )
}
